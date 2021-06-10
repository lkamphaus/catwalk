import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";

const Thumbnails = ({ thumbUrl, handleThumb }) => {
  return (
    <div
      onClick={(e) => {
        handleThumb(e);
      }}
    >
      <img id={style.thumbImage} src={thumbUrl}></img>
    </div>
  );
};

export default Thumbnails;
