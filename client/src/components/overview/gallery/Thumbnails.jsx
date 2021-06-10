import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";

const Thumbnails = ({ thumbUrl, thumbnail, handleThumb, product, selected }) => {

  return (
    <div
      onClick={(e) => {
        handleThumb(e);
      }}
    >
      {!thumbnail ? (
        <img id={style.thumbImage} src={thumbUrl}></img>
      ) : (
        <img id={style.thumbImage} src={thumbnail}></img>
      )}
    </div>
  );
};

export default Thumbnails;
