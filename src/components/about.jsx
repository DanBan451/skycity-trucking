import React from "react";
import NavbarComponent from "./common/Navbar";
import FooterComponent from "./common/Footer";
import aboutImage from "../images/aboutusimage.jpg";

import { useTranslation } from "react-i18next";
import classes from "../styles/about.module.css";

export default function About({ navigation }) {

  const { t } = useTranslation(); 

  return (
    <div id={classes.about}>
      <NavbarComponent />

      <div className={classes.header}>
        <div className={classes.headerText}>
          <h1>{t('about.header-h1')}</h1>
          <h2>{t('about.header-h2')}</h2>
        </div>
        <img src={aboutImage} alt="" />
      </div>

      <div className={classes.content}>
        <div className={classes.description}>
          <p>{t('about.content.p_1')}</p>
          <p>{t('about.content.p_2')}</p>
          <p>{t('about.content.p_3')}</p>
          <p>{t('about.content.p_4')}</p>
          <p>{t('about.content.p_5')}</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
