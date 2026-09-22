import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavbarComponent from "../components/common/Navbar";
import Service from "../components/common/service";
import Footer from "../components/common/Footer";
import SlideShow from "../components/common/SlideShow";

import warehouse from "../images/home/warehouse.jpg";
import drayageServices from "../images/services/drayage.jpg";
import oversize from "../images/services/oversize.jpg";
import trustedCompanies from "../images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up-1024x683.jpg";
import largeSemi from "../images/home/Large-semi-truck-hauling-freight-on-the-open-highway-in-the-western-USA-under-an-evening-sky.jpg";

import classes from "../styles/main.module.css";

export default function Main({ navigation }) {
  const { t } = useTranslation(); 

  const paragraphs = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [value];
  };

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
          image={largeSemi}
          title={t("main.services.service-1.h1")}
          desc={paragraphs("main.services.service-1.p")}
          actionCall={t("main.services.service-1.Link")}
          endpoint={'/contact'}          
        />
        <Service
          image={warehouse}
          title={t("main.services.service-2.h1")}
          desc={paragraphs("main.services.service-2.p")}
          actionCall={t("main.services.service-2.Link")}
          styles={classes.rev}
          endpoint={'/services'}          
        />
        <Service
          image={oversize}
          title={t("main.services.service-3.h1")}
          desc={paragraphs("main.services.service-3.p")}
          actionCall={t("main.services.service-3.Link")}
          endpoint={'/contact'}          
        />
        <Service
          image={drayageServices}
          title={t("main.services.service-4.h1")}
          desc={paragraphs("main.services.service-4.p")}
          actionCall={t("main.services.service-4.Link")}
          styles={classes.rev}
          endpoint={'/services'}          
        />
        <Service
          image={trustedCompanies}
          title={t("main.services.service-5.h1")}
          desc={paragraphs("main.services.service-5.p")}
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

      <Footer />
    </React.Fragment>
  );
}
