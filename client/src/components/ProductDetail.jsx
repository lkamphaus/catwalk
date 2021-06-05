import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../../../client/dist/ProductDetail.module.css";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    console.log('got here')
    fetch(`http://localhost:3246/api/products/${product_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setProd)
      .catch((err) => console.log("err", err));
  }, product_id);

  return (
    <div>
      <div className="prod" style={{ color: "yellow" }}>
      <h1>YES</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
