import React, { useEffect, useState } from "react";
import classes from "../../styles/loader.module.css";

export default function Loader({ src, styles, index, classNameProp }) {
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
      />
    </React.Fragment>
  );
}
