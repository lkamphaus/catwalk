import React from "react";
import Features from "./Features.jsx";
import style from "../MainOverview.module.css";


const Description = ({ product, prod, images }) => {

  return (
    <div className={style.description}>
      <div className={style.slogan}>{prod && prod.slogan}</div>
      <div className={style.info}>{prod && prod.description}</div>
      <div>
        <Features prod={prod} />
      </div>
    </div>
  );
};

export default Description;
