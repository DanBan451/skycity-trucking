import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactScroll from "react-scroll";
import classes from "../../styles/slideshow.module.css";
import scrollDown from "../../images/icons8-scroll-down-100.png";
import { useTranslation } from "react-i18next";

import Image1 from "../../images/home/IMG_5418.jpg";
import Image2 from "../../images/home/IMG_5417.jpg";
import Image3 from "../../images/home/IMG_5417.jpg";

import openCircle from "../../images/home/icons8-circle-100.png";
import closedCircle from "../../images/home/icons8-filled-circle-100.png";

const SlideShow = ({ t }) => {
  
  let [currentImage, setCurrentImage] = useState(0);  
  
  const updateImage = () => {
    let newCurrentImage = currentImage !== 2 ? currentImage + 1 : 0;
    setCurrentImage(newCurrentImage);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      updateImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const images = [Image1, Image2, Image3];

  return (
    <div className={classes.headerWrapper}>
      <div
        className={classes.header}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className={classes.headerContent}>
          <h1>
            {t('slideshow.headerContent.h1-1')}<br />{t('slideshow.headerContent.h1-2')}           
          </h1>
          <h2>
            {t('slideshow.headerContent.h2-1')}<br />{t('slideshow.headerContent.h2-2')}
          </h2>
          <div className={classes.headerButtons}>
            <Link to="/contact" className="btn m-2">
              {t('slideshow.headerButtons.Link_1')}
            </Link>
            <Link to="/careers" className="btn m-2">
              {t('slideshow.headerButtons.Link_2')}
            </Link>
          </div>
          <ReactScroll.Link to="section1">
            <img src={scrollDown} alt="" />
          </ReactScroll.Link>
        </div>

        <div className={classes.pagination}>
          {images.map((image, index) => (
            <img
              src={currentImage === index ? closedCircle : openCircle}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className={classes.headerButtons}>
        <Link to="/contact" className="btn">
          {t('slideshow.headerButtons.Link_1')}
        </Link>
        <Link to="/careers" className="btn">
          {t('slideshow.headerButtons.Link_2')}
        </Link>
      </div>
    </div>
  );
};

export default SlideShow;
