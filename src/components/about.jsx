import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./common/Navbar";
import FooterComponent from "./common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import Loader from "./common/loader";

import { useTranslation } from "react-i18next";
import classes from "../styles/about.module.css";
import Contact from "./common/contact";

// highway images
import hSmall from "../images/aboutpage/400.jpg";
import hMedium from "../images/aboutpage/800.jpg";
import hLarge from "../images/aboutpage/1200.jpg";
import hBeyond from "../images/aboutpage/1950.jpg";

import highway from "../images/aboutpage/iStock-1413625824.jpg";

export default function About({ navigation }) {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      duration: 0,
    });
  });

  return (
    <div id={classes.about}>
      <div className={classes.header}>
        <div>
          <h1>About V&Y Horizon</h1>
          <p>
            Since the the inception of V&Y in 2015, its owners and employees
            already had an extensive transportation experience in various
            capacities from 2005 — we are by no means new to this industry! From
            the very beginning we put out word, our integrity, and our reputation
            at our core. There are many “good” transportation companies out there
            and we believe we are among those who provide extraordinary services
            while upholding our shares values. These values not only make us excel
            in what we do but ensure long lasting partnerships with customers and
            employees. As a result, we have been recognized as the carrier of the
            year in 2020 in the PNW intermodal market. This is just the beginning
            for us and we strive to be the best in the industry, serving our
            customers, community and our team.
          </p>
          <a className={classes.button} href={"#mission"}>
            <FontAwesomeIcon
              icon="chevron-down"
              color="#005cac"
              fontSize={30}
              className="blue-chevron"
            />
          </a>
        </div>
      </div>

      <Loader
        src={hBeyond}
        small={hSmall}
        medium={hMedium}
        large={hLarge}
        classNameProp={classes.image}
        id={"mission"}
      />

      <div className={classes.mission}>
        <span>OUR MISSION</span>
        <p>
          Our mission at V&Y Horizon is to provide you with old-school robust
          services with modern transportation — rail & port drayage,
          over-the-road operations, less-than-truckload cartage — you can rely
          on. We are dedicated to providing hassle-free service with clear
          communication every step of the way.
        </p>
      </div>

      <div className={classes.values}>
        <h1>Our Core Values</h1>
        <div className={classes.card}>
          <h1>1</h1>
          <div>
            <span>Safety First & Always</span>
            <p>
              We operate on a Safety First & Always standard, from start to
              finish. We strive to enhance the well-being of our employees,
              protect our cargo, as well as the greater community. We are
              continously improving our safety protocals to ensure that no one
              gets hurt.
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <h1>2</h1>
          <div>
            <span>Community Aware</span>
            <p>
              In all of our transportation operations, we are mindful of our
              community. At V&Y Horizon we partner with major companies such as
              SmartWay Transport, which stands by “Getting there with cleaner
              air.”
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <h1>3</h1>
          <div>
            <span>Clear Communication</span>
            <p>
              We have said before, and we will say it again: Clear Communication
              is our all. We are transparent upfront and ensure that you have no
              surprises — other than exceptinal transportation & customer
              service from our end.
            </p>
          </div>
        </div>
      </div>

      <Contact />

      {/* <div className={classes.content}>
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
      </div> */}
      <FooterComponent />
    </div>
  );
}
