import React from "react";
import styles from "./Reviews.module.css";
import ReviewTile from "./ReviewTile.jsx"

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      sort: 'relevant'
    }

    this.getReviews = this.getReviews.bind(this)
  }

  componentDidMount() {
    this.getReviews()
  }

  getReviews() {
    fetch(`http://localhost:3246/api/reviews/${this.props.id}/${1}/${2}/${this.state.sort}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        reviews: data
      }))
      .catch(err => console.log("err", err))
  }

  render() {
    var reviews = this.state.reviews.map((review) =>
      <ReviewTile key={review.review_id} body={review.body}/>
    );

    return (<div><div>{reviews}</div></div>);
  }
}

export default ReviewsList;