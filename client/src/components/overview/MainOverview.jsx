import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MainOverview = () => {
  const [product, setProd] = useState([]);
  const { product_id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3246/api/products/${product_id}/styles?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('the data is here', data)
      setProd(product => data.results)})
      .catch(err => console.log("err", err))
    }, []);
    console.log(product)
    return (
    <div>
      <div className="prod" style={{ color: "black" }}>
      <h1>{product.map((item) => (
        item.name
      ))}</h1>
      </div>
    </div>
  );
};

export default MainOverview;
