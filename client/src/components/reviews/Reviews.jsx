import React from "react";
import ReviewsList from "./ReviewsList.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import styles from "./Reviews.module.css";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      overview: null,
    };
  }

  componentDidMount() {
    this.getMeta();
  }

  getMeta() {
    fetch(
      `http://localhost:3246/api/reviews/meta/${this.props.id}?format=json`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          total:
            (Number(data.recommended.false) || 0) +
            (Number(data.recommended.true) || 0),
          overview: data,
        })
      )
      .catch((err) => console.log("err", err));
  }

  render() {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.reviewsList}>
          <ReviewsList
            id={this.props.id}
            name={this.props.name}
            total={this.state.total}
          />
        </div>
        <div className={styles.productBreakdown}>
          <ProductBreakdown overview={this.state.overview} />
        </div>
      </div>
    );
  }
}

export default Reviews;
