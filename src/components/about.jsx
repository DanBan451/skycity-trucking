import React from "react";
import NavbarComponent from "./common/Navbar";
import FooterComponent from "./common/Footer";
import aboutImage from "../images/aboutusimage.jpg";
import arrow from "../images/blue-arrow.svg";

import { useTranslation } from "react-i18next";
import classes from "../styles/about.module.css";

export default function About({ navigation }) {

  const { t } = useTranslation(); 

  return (
    <div id={classes.about}>
      <NavbarComponent />

      <div className={classes.header}>
        <h1>{t('about.header-h1')}</h1>
        <img src={aboutImage} alt="" />
      </div>

      <div className={classes.content}>
        <div className={classes.description}>
          <p>
            {t('about.content.p_1')}
            <br/><br/>{t('about.content.p_2')}
          </p>
        </div>
        <div className={classes.features}>
          <h1>{t('about.features.h1')}</h1>
          <ul>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_1')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_2')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_3')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_4')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_5')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_6')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_7')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_8')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_9')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_10')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_11')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_12')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_13')}
            </li>
            <li>
              <img src={arrow} alt="" />
              {t('about.features.span_14')}
            </li>
          </ul>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
