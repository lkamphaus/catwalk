import React from "react";
import ReviewsList from "./ReviewsList.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import styles from "./Reviews.module.css";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: null,
      average: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.meta !== prevProps.meta) {
      var sum = 0;
      var total = 0;
      for (var key in this.props.meta.ratings) {
        sum += Number(key) * this.props.meta.ratings[key];
        total += Number(this.props.meta.ratings[key]);
      }
      this.setState({
        average: sum / total,
      });
    }
  }

  render() {
    var total =
      this.props.meta === null
        ? null
        : (Number(this.props.meta.recommended.false) || 0) +
          (Number(this.props.meta.recommended.true) || 0);

    var roundedAverage = this.state.average === null ? null : Number(this.state.average.toFixed(1))

    return (
      <div className={styles.gridContainer}>
        <div>
          <ReviewsList
            id={this.props.id}
            name={this.props.name}
            total={total}
          />
        </div>
        <div className={styles.productBreakdown}>
          <ProductBreakdown
            total={total}
            meta={this.props.meta}
            overview={this.state.overview}
            rounded={roundedAverage}
            rating={this.state.average}
          />
        </div>
      </div>
    );
  }
}

export default Reviews;
