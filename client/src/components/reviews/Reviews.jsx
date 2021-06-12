import React from "react";
import ReviewsList from "./ReviewsList.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import RatingBar from "./RatingBar.jsx";
import styles from "./Reviews.module.css";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: null,
      average: null,
      filters: [],
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

  handleFilter(rating) {
    if (this.state.filters.indexOf(rating) === -1) {
      this.setState({
        filters: [...this.state.filters, rating],
      });
    } else {
      this.setState({
        filters: this.state.filters.filter((filter) => filter !== rating),
      });
    }
  }

  render() {
    var total =
      this.props.meta === null
        ? null
        : (Number(this.props.meta.recommended.false) || 0) +
          (Number(this.props.meta.recommended.true) || 0);

    var filters = this.state.filters.map((filter) => (
      <div style={{ fontSize: "14px" }}>{`${filter}-star reviews`}</div>
    ));

    var ratingBars =
      this.props.meta === null
        ? null
        : ["5", "4", "3", "2", "1"].map((rating) => (
            <div
              className={styles.ratingBar}
              onClick={() => this.handleFilter(rating)}
            >
              <span
                style={{ marginRight: "10px", textDecoration: "underline" }}
              >
                {rating} stars:
              </span>
              <RatingBar
                stars={rating}
                percentage={
                  this.props.meta.ratings[rating]
                    ? Math.floor(
                        (this.props.meta.ratings[rating] / total) * 100
                      )
                    : 0
                }
              />
            </div>
          ));

    var roundedAverage =
      this.state.average === null
        ? null
        : Number(this.state.average.toFixed(1));

    return (
      <div className={styles.gridContainer}>
        <div>
          <ReviewsList
            id={this.props.id}
            name={this.props.name}
            total={total}
            filters={this.state.filters}
            meta={this.props.meta}
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
          <div className={styles.ratingFilter}>
            <br />
            <span>
              Filters currently applied:
              {filters}
            </span>
            {ratingBars}
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
