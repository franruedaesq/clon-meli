import React from "react";
import "./MinProductImg.scss";

export default function MinProductImg({ srcImg, imgSelected }) {
  return (
    <>
      <img
        onClick={imgSelected}
        className="minProductImg__item"
        src={srcImg}
        alt=""
      />
    </>
  );
}
