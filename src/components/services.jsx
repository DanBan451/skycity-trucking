import React, { img } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import { Link } from "react-router-dom";
import classes from "../styles/services.module.css";
import Cards from "../Cards";
import { useTranslation } from "react-i18next";


export default function Services({ navigation }) {

  const { t } = useTranslation(); 
  
  return (
    <div>
      <NavbarComponent />
      <div className={classes.header}>
        <h1 className={classes.title}>{t('services.header-h1')}</h1>
        <span className={classes.subTitle}>
          {t('services.header-span')}
        </span>
      </div>
      <div className={classes.cardsList}>
        <Cards classes={classes} t={t}/>
      </div>

      <div className={classes.buttonsWrapper}>
        <h1>{t('services.buttonsWrapper.h1')}</h1>        
        <div className={classes.buttons}>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>{t('services.buttonsWrapper.Link_1')}</Link>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>{t('services.buttonsWrapper.Link_2')}</Link>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
