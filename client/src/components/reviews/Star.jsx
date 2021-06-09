import React from "react";
import styles from "./Reviews.module.css";

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return <div>RATINGS & REVIEWS</div>;
  }
}

export default Star;