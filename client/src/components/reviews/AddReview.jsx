import React from "react";
import Modal from "./Modal.jsx";
import styles from "./Reviews.module.css";

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      fields: {
        body: ''
      },
      errors: [],
      valid: true,
      images: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleAdd() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleUpload(e) {
    const file = e.target.files[0];

    const formData = new FormData()
    formData.append(0, file);

    fetch(`http://localhost:3246/api/reviews/image-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(url => {
        this.setState({
          images: [...this.state.images, url.secure_url]
        })
      })
      .catch(err => console.log(err))
  }

  handleChange(field, e) {
    var fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      //post function
    }
  }

  render() {
    var images = this.state.images.map((image) =>
      <img className={styles.smallImg} src={image} />
    )

    var charsLeft = 50 - this.state.fields["body"].length;

    var minMessage = charsLeft > 0 ? `Minimum required characters left: ${charsLeft}` : "Minimum reached.";

    var uploadPhotos = this.state.images.length < 5 ?
    (<div>
      <div className={styles.formTitle}>Upload your photos:  </div>
      <input type="file" id="single" onChange={(e) => this.handleUpload(e)} />
    </div>) : <div>Maximum number of photos uploaded</div>

    var modal = this.state.clicked ? (
      <Modal>
        <div className={styles.formModal}>
          <div className={styles.exit} onClick={this.handleAdd}>X</div>
          <form className={styles.reviewForm} name="reviewform" onSubmit={this.handleSubmit}>

            <label>
              <div className={styles.formTitle}>Review summary:  </div>

              <input className={styles.fields} style={{ width: "500px", height: "20px" }} type="text" placeholder="Example: Best purchase ever!" maxLength="60" onChange={(e) => this.handleChange("summary", e)} value={this.state.fields["summary"]}></input>
            </label>


            <label>
              <div className={styles.formTitle}>Review body:  </div>

              <textarea className={styles.fields} style={{ width: "500px", height: "200px" }} type="textarea" placeholder="Why did you like the product or not?" maxLength="1000" onChange={(e) => this.handleChange("body", e)} value={this.state.fields["body"]}></textarea>
              <br />

              <div className={styles.formTitle}>{minMessage}</div>
            </label>


            <label>
              {uploadPhotos}
              <div>
                {images}
              </div>
            </label>

            {/* <button style={{ display: this.state.images.length < 5 ? "block" : "none" }}>
              <label htmlFor="single">
                Upload a Photo
              </label>
              <input type="file" id="single" onChange={(e) => this.handleUpload(e)} />
            </button>
            <div>
              {images}
            </div> */}
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </Modal>
    ) : null;

    return (
      <div>
        <button className={styles.reviewButtons} onClick={this.handleAdd}>ADD A REVIEW  +</button>
        {modal}
      </div>
    );
  }
}

export default AddReview;