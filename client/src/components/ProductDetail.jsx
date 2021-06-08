import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./reviews/Reviews.jsx";
import MainOverview from "./overview/MainOverview.jsx";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3246/api/products/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setProd(data))
      .catch(err => console.log("err", err))
  }, []);



  return (
    <div>
      <div>
        <MainOverview prod={prod} />
      </div>
      <div>

      </div>
      <div>
        <Reviews id={product_id} />
      </div>
    </div>
  );
};

export default ProductDetail;
