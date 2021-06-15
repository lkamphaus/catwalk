import React from "react";
import Features from "./Features.jsx";
import style from "../MainOverview.module.css";
import { GrTwitter, GrInstagram, GrFacebookOption, GrLinkedinOption } from "react-icons/gr"

const Description = ({ prod }) => {
  return (
    <div>
      <div className={style.slogan}>{prod && prod.slogan}</div>
      <br></br>
      <div className={style.info}>{prod && prod.description}</div>
      <br></br>
      <div className={style.social}>
        <div id={style.twitter}>
          <GrTwitter />
        </div>
        <div id={style.insta}>
          <GrInstagram />
        </div>
        <div id={style.fb}>
          <GrFacebookOption />
        </div>
        <div id={style.link}>
          <GrLinkedinOption />
        </div>
      </div>
    </div>
  );
};

export default Description;
