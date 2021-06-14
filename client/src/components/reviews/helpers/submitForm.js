var submitForm = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
  let form = {
    product_id,
    rating,
    summary,
    body,
    recommend,
    name,
    email,
    photos,
    characteristics
  }

  fetch(`/api/reviews`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form)
  })
  .catch((err) => {
    console.log("err", err)
  })

};

export default submitForm;