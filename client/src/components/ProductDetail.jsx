import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Config from "../../.././config.js";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3246/products/${product_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setProd)
      .catch((err) => console.log("err", err));
  }, product_id);

  return (
    <div>
      <div>{prod}</div>
    </div>
  );
};

export default ProductDetail;
