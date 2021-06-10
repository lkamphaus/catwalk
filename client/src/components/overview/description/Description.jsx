import React from "react";
import Features from "./Features.jsx";
import style from "../MainOverview.module.css";


const Description = ({prod}) => {

  return (
    <div >
      <div className={style.description} className={style.slogan}  >{prod && prod.slogan}</div>
      <div className={style.description} className={style.info} >{prod && prod.description}</div>
      {/* <div className={style.description2}>
        <Features prod={prod} />
      </div> */}
    </div>
  );
};

export default Description;
