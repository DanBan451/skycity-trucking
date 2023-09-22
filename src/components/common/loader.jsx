import React, { useEffect, useState } from "react";
import classes from "../../styles/loader.module.css";

export default function Loader({ src, styles, index, classNameProp, id, small, medium, large }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <React.Fragment>
      {!isImageLoaded && <div className={classes.placeholder}></div>}
      <img
        src={src}
        onLoad={handleImageLoad}
        style={{ display: isImageLoaded ? "block" : "none", ...styles }}
        index={index || 0}
        className={classNameProp}
        id={id}
        srcSet={`
        ${small || src} 320w,
        ${medium || src} 640w,
        ${large || src} 1200w,
        ${src || src} 1920w
      `}
      />
    </React.Fragment>
  );
}
