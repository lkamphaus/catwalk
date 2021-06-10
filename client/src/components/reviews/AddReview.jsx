import React from "react";
import Modal from "./Modal.jsx";
import styles from "./Reviews.module.css";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      fields: {
        body: "",
      },
      errors: [],
      valid: true,
      images: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleAdd() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  handleUpload(e) {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append(0, file);

    fetch(`http://localhost:3246/api/reviews/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((url) => {
        this.setState({
          images: [...this.state.images, url.secure_url],
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange(field, e) {
    var fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      //post function
    }
  }

  render() {
    var images = this.state.images.map((image) => (
      <img className={styles.smallImg} src={image} />
    ));

    var charsLeft = 50 - this.state.fields["body"].length;

    var minMessage =
      charsLeft > 0
        ? `Minimum required characters left: ${charsLeft}`
        : "Minimum reached.";

    var uploadPhotos =
      this.state.images.length < 5 ? (
        <div>
          <h4 className={styles.formTitle}>Upload your photos </h4>
          <input
            type="file"
            id="single"
            onChange={(e) => this.handleUpload(e)}
          />
        </div>
      ) : (
        <div>Maximum number of photos uploaded</div>
      );

    var modal = this.state.clicked ? (
      <Modal>
        <div className={styles.formModal}>
          <div className={styles.exit} onClick={this.handleAdd}>
            X
          </div>
          <h2 className={styles.formTitle}>Write Your Review</h2>
          <h3 className={styles.formTitle}>About the {this.props.name}</h3>
          <form
            className={styles.reviewForm}
            name="reviewform"
            onSubmit={this.handleSubmit}
          >
            <label>
              <h4 className={styles.formTitle}>Review summary </h4>

              <input
                className={styles.fields}
                style={{ width: "500px", height: "20px" }}
                type="text"
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                onChange={(e) => this.handleChange("summary", e)}
                value={this.state.fields["summary"]}
              ></input>
            </label>

            <label>
              <h4 className={styles.formTitle}>Review body </h4>

              <textarea
                className={styles.fields}
                style={{ width: "500px", height: "200px" }}
                type="textarea"
                placeholder="Why did you like the product or not?"
                maxLength="1000"
                onChange={(e) => this.handleChange("body", e)}
                value={this.state.fields["body"]}
              ></textarea>
              <br />

              <div className={styles.formTitle}>{minMessage}</div>
            </label>

            <label>
              <h4 className={styles.formTitle}>What is your nickname? </h4>

              <input
                className={styles.fields}
                style={{ width: "500px", height: "20px" }}
                type="text"
                placeholder="Example: jackson11!"
                maxLength="60"
                onChange={(e) => this.handleChange("nickname", e)}
                value={this.state.fields["nickname"]}
              ></input>
              <br />

              <div className={styles.formTitle}>
                For privacy reasons, do not use your full name or email address.
              </div>
            </label>

            <label>
              <h4 className={styles.formTitle}>Your email </h4>

              <input
                className={styles.fields}
                style={{ width: "500px", height: "20px" }}
                type="text"
                placeholder="Example: jackson11@gmail.com"
                maxLength="60"
                onChange={(e) => this.handleChange("email", e)}
                value={this.state.fields["email"]}
              ></input>
              <br />

              <div className={styles.formTitle}>
                For authentication reasons, you will not be emailed.
              </div>
            </label>

            <label>
              {uploadPhotos}
              <div>{images}</div>
              <br />
            </label>

            <button type="submit">Submit Review</button>
          </form>
        </div>
      </Modal>
    ) : null;

    return (
      <div style={{display: "inline"}}>
        <button className={styles.reviewButtons} onClick={this.handleAdd}>
          ADD A REVIEW +
        </button>
        {modal}
      </div>
    );
  }
}

export default AddReview;
