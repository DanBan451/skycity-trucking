import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavbarComponent from "../components/common/Navbar";
import Service from "../components/common/service";
import Footer from "../components/common/Footer";
import SlideShow from "../components/common/SlideShow";

import warehouse from "../images/home/petrebels-JwMGy1h-JsY-unsplash.jpg";
import twoSemisOnRoad from "../images/home/warehouse.jpg";
import semiOnRoad from "../images/home/trusted.jpg";
import largeSemi from "../images/home/Large-semi-truck-hauling-freight-on-the-open-highway-in-the-western-USA-under-an-evening-sky.jpg";
import personLookingAtComputer from "../images/home/thisisengineering-raeng-lLrZy195sIU-unsplash.jpg";

import classes from "../styles/main.module.css";

export default function Main({ navigation }) {
  const { t } = useTranslation(); 

  return (
    <React.Fragment>
      <NavbarComponent />

      <SlideShow t={t}/>

      <div className={classes.about} id='section1'>
        <h1>
          {t("main.about.h1-1")}<br /> {t("main.about.h1-2")}
        </h1>
        <span>
          {t("main.about.span-1")} <br /> {t("main.about.span-2")}          
        </span>
      </div>

      <div className={classes.services}>
        <Service
          image={warehouse}
          title={t("main.services.service-1.h1")}
          desc={t("main.services.service-1.span")}
          actionCall={t("main.services.service-1.Link")}
          endpoint={'/contact'}          
        />
        <Service
          image={largeSemi}
          title={t("main.services.service-2.h1")}
          desc={t("main.services.service-2.span")}
          actionCall={t("main.services.service-2.Link")}
          styles={classes.rev}
          endpoint={'/services'}          
        />
        <Service
          image={twoSemisOnRoad}
          title={t("main.services.service-3.h1")}
          desc={t("main.services.service-3.span")}
          actionCall={t("main.services.service-3.Link")}
          endpoint={'/contact'}          
        />
        <Service
          image={personLookingAtComputer}
          title={t("main.services.service-4.h1")}
          desc={t("main.services.service-4.span")}
          actionCall={t("main.services.service-4.Link")}
          styles={classes.rev}
          endpoint={'/careers'}          
        />
        <Service
          image={semiOnRoad}
          title={t("main.services.service-5.h1")}
          desc={t("main.services.service-5.span")}
          actionCall={t("main.services.service-5.Link")}
          endpoint={'/contact'}          
        />
      </div>

      <div className={classes.buttonsWrapper}>
        <h1>{t("main.buttonsWrapper.h1")}</h1>        
        <div className={classes.buttons}>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>{t("main.buttonsWrapper.Link_1")}</Link>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>{t("main.buttonsWrapper.Link_2")}</Link>
        </div>
      </div>

      {/* <ContactButtons content={"Get in Touch with Sky City Trucking Today"} /> */}

      <Footer />
    </React.Fragment>
  );
}
