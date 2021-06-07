import React from "react";
import ReviewsList from "./ReviewsList.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import styles from "./Reviews.module.css";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className={styles.gridContainer}>
      <div className={styles.reviewsList}>
        <ReviewsList id={this.props.id}/>
      </div>
      <div className={styles.productBreakdown}>
        <ProductBreakdown />
      </div>
    </div>);
  }
}

export default Reviews;