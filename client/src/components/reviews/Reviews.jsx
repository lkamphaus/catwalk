import React from "react";
import ReviewsList from "./Reviews List/ReviewsList.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import BreakdownBar from "./BreakdownBar.jsx";
import styles from "./Reviews.module.css";
const selectionMeanings = require("./selectionMeanings.js");

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: null,
      average: null,
      filters: [],
      search: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(e) {
    var searchTerm = e.target.value;

    if (searchTerm.length > 2) {
      this.setState({
        search: searchTerm,
      });
    } else {
      this.setState({
        search: "",
      });
    }
  }

  handleRemove() {
    this.setState({
      filters: [],
    });
  }

  render() {
    var total =
      this.props.meta === null
        ? null
        : (Number(this.props.meta.recommended.false) || 0) +
          (Number(this.props.meta.recommended.true) || 0);

    var filters =
      this.state.filters.length === 0 ? (
        <div>None</div>
      ) : (
        this.state.filters.map((filter) => (
          <div
            key={filter}
            style={{ fontSize: "14px", color: "#d96c06", padding: "5px 0" }}
          >{`${filter}-star reviews`}</div>
        ))
      );

    var removeFilters =
      this.state.filters.length > 0 ? (
        <div
          style={{
            cursor: "pointer",
            paddingTop: "10px",
            textDecoration: "underline",
          }}
          onClick={() => this.handleRemove()}
        >
          Remove all filters
        </div>
      ) : null;

    var ratingBars =
      this.props.meta === null
        ? null
        : ["5", "4", "3", "2", "1"].map((rating) => (
            <div
              key={rating}
              className={styles.ratingBar}
              onClick={() => this.handleFilter(rating)}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "12%",
                  marginRight: "10px",
                  textDecoration: "underline",
                }}
              >
                {rating} stars:
              </span>
              <BreakdownBar
                fill="fill"
                number={
                  this.props.meta.ratings[rating] &&
                  this.props.meta.ratings[rating]
                }
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

    var characteristicBars = [];

    if (this.props.meta) {
      for (var key in this.props.meta.characteristics) {
        characteristicBars.push(key);
      }
    }

    characteristicBars = characteristicBars.map((characteristic) => (
      <div key={characteristic} style={{ margin: "30px 0px" }}>
        <span
          style={{ marginRight: "10px", display: "inline-block", width: "15%" }}
        >
          {characteristic}
        </span>
        <BreakdownBar
          low={selectionMeanings[characteristic][0]}
          high={selectionMeanings[characteristic][4]}
          percentage={
            this.props.meta.characteristics &&
            (this.props.meta.characteristics[characteristic].value / 5) * 100
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
            handleSearch={this.handleSearch}
            search={this.state.search}
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
              {removeFilters}
            </span>
            {ratingBars}
            <br />
            {characteristicBars}
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
