import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "./common/Navbar";
import FooterComponent from "./common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParallaxBanner } from "react-scroll-parallax";

import { useTranslation } from "react-i18next";
import classes from "../styles/about.module.css";
import Contact from "./common/contact";

import highway from "../images/aboutpage/iStock-1413625824.jpg";

export default function About({ navigation }) {
  const { t } = useTranslation();

  return (
    <div id={classes.about}>
      <div className={classes.header}>
        <h1>About V&Y Horizon</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum unde
          vel adipisci veritatis molestias, tenetur, mollitia labore obcaecati
          officiis cum quasi illum! Eveniet, aperiam maxime, distinctio atque
          voluptatum amet ipsam dolores voluptates asperiores, fuga accusamus
          laboriosam. Quis labore blanditiis illum corporis officiis nam
          voluptatibus, in possimus quae? Aperiam nostrum similique maxime
          officiis assumenda asperiores veniam! Cupiditate atque quae deserunt
          minima doloribus debitis veritatis expedita molestiae obcaecati, aut
          error illum accusantium quam! Repudiandae vero provident officiis
          soluta, autem esse earum laboriosam?
        </p>
        <Link className={classes.button}>
          <FontAwesomeIcon
            icon="chevron-down"
            color="#005cac"
            fontSize={30}
            className="blue-chevron"
          />
        </Link>
      </div>

      <ParallaxBanner
        className={classes.image}
        layers={[{ image: highway, speed: 20 }]}
      />

      {/* <div className={classes.image} /> */}

      <div className={classes.mission}>
        <span>OUR MISSION</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          voluptates sequi fugiat delectus et debitis totam adipisci deserunt
          quisquam. Ab sequi accusantium inventore ullam ipsam quaerat!
          Voluptatem inventore ab tempora similique cumque vel? Quaerat
          dignissimos iusto facere dicta ipsa iste ullam maxime rerum?
          Accusantium quo numquam harum ullam repellat in blanditiis mollitia
          autem esse, dolorum earum, cum, et praesentium? Atque unde qui ratione
          labore similique quod hic dolorem voluptatibus non.
        </p>
      </div>

      <div className={classes.values}>
        <h1>Our Core Values</h1>
        <div className={classes.card}>
          <h1>1</h1>
          <div>
            <span>A company value</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              ad necessitatibus fugit quod voluptates temporibus dolor aperiam a
              aut voluptatum expedita illo consequatur, quos amet atque.
              Explicabo quae velit obcaecati illo, pariatur dolor, repudiandae
              autem, voluptate distinctio dolore quia eos eaque? Ratione
              asperiores voluptatibus soluta quam id qui illo similique?
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <h1>2</h1>
          <div>
            <span>A company value</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              ad necessitatibus fugit quod voluptates temporibus dolor aperiam a
              aut voluptatum expedita illo consequatur, quos amet atque.
              Explicabo quae velit obcaecati illo, pariatur dolor, repudiandae
              autem, voluptate distinctio dolore quia eos eaque? Ratione
              asperiores voluptatibus soluta quam id qui illo similique?
            </p>
          </div>
        </div>
        <div className={classes.card}>
          <h1>3</h1>
          <div>
            <span>A company value</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              ad necessitatibus fugit quod voluptates temporibus dolor aperiam a
              aut voluptatum expedita illo consequatur, quos amet atque.
              Explicabo quae velit obcaecati illo, pariatur dolor, repudiandae
              autem, voluptate distinctio dolore quia eos eaque? Ratione
              asperiores voluptatibus soluta quam id qui illo similique?
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
