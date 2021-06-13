import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";

const ModalThumbs = ({ thumbUrl, handleThumb }) => {
  
  return (
    <div id={style.thumbImage} style={{borderRadius: '0%', backgroundColor: '#D96C06', marginBottom: '28px'}}
      onClick={(e) => {
        handleThumb(e, thumbUrl);
      }}
      >
      {/* <img src={thumbUrl}></img> */}
      
    </div>
  );
};

export default ModalThumbs;
