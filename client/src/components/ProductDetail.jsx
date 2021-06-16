import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import MainOverview from "./overview/MainOverview.jsx";
import QuestionList from "./QA/QuestionList.jsx";
import Reviews from "./reviews/Reviews.jsx";
import styles from ".././style.css";
import ClickTracking from ".././ClickTracking.jsx";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const [meta, setMeta] = useState(null);
  const { product_id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3246/api/products/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProd(data))
      .catch((err) => console.log("err", err));

    fetch(`http://localhost:3246/api/reviews/meta/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMeta(data))
      .catch((err) => console.log("err", err));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const darkModeText = darkMode ? "LIGHT MODE" : "DARK MODE";
  const darkModeStyle = darkMode ? styles.darkMode : styles.lightMode;

  return (
    <div className={styles.App} data-theme={darkMode ? "dark" : "light"}>
      <div>
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkModeText={darkModeText}
          darkModeStyle={darkModeStyle}
        />
      </div>
      <div>
        <div style={{ width: "100%" }}>
          <ClickTracking module={"Overview"}>
            <MainOverview prod={prod} />
          </ClickTracking>
        </div>
        <div>
          <ClickTracking module={"Questions & Answers"}>
            <QuestionList
              id={product_id}
              productName={prod === null ? null : prod.name}
            />
          </ClickTracking>
        </div>
        <div>
          <ClickTracking module={"Reviews"}>
            <Reviews
              id={product_id}
              meta={meta}
              name={prod === null ? null : prod.name}
            />
          </ClickTracking>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
