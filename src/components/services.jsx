import React, { img } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import { Link } from "react-router-dom";
// import { ParallaxBanner } from "react-scroll-parallax";
import Loader from "./common/loader";

import classes from "../styles/services.module.css";
import Cards from "../Cards";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import darkFreight from "../images/servicespage/darkfreight.jpg";
import freight from "../images/servicespage/freight.jpg";
import freightSmall from "../images/servicespage/freight-1500_x_1001.png";
import whitebluetrucks from "../images/servicespage/whitebluetrucks.jpg";
import whitebluetrucksSmall from "../images/servicespage/whitebluetrucks-1500_x_999.png";
import boxes from "../images/servicespage/boxes.jpg";
import boxesSmall from "../images/servicespage/boxes-1500_x_969.png";
import birdseye from "../images/servicespage/birdseyefreight.jpg";
import birdseyeSmall from "../images/servicespage/birdseyefreight-1500_x_842.jpg";

export default function Services({ navigation }) {
  const { t } = useTranslation();

  return (
    <div>
      {/* <ParallaxBanner
        className={classes.header}
        layers={[{ image: darkFreight, speed: 20 }]}
      >
        <h1>
          Services &<br />
          Freight Solutions
        </h1>
      </ParallaxBanner> */}
      <div className={classes.header}>
        <Loader src={darkFreight} classNameProp={classes.image} />
        <h1>
          Services &<br />
          Freight Solutions
        </h1>
      </div>

      <Link className={classes.scrollButton}>
        <FontAwesomeIcon
          icon="chevron-down"
          color="black"
          fontSize={40}
          className="blue-chevron"
        />
      </Link>

      <div className={classes.shipping}>
        <div>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            exercitationem quibusdam nam facilis neque libero repudiandae amet
            similique repellendus recusandae voluptate non eveniet temporibus
            ipsa tenetur expedita, consectetur cupiditate explicabo?
          </p>
        </div>
      </div>

      <div className={classes.fleet}>
        <h1>Dedicated Fleet Operations</h1>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img
              srcset={`${freight} 1500w,
              ${freightSmall} 768w`}
              sizes="(max-width: 768px) 100vw, 1500px"
              alt="Freight"
            />
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <Link className={`${classes.button}`}>Request a Quote</Link>
          </div>
          <div className={classes.card}>
            <img
              srcset={`
              ${whitebluetrucks} 1500w,
              ${whitebluetrucksSmall} 768w`}
              sizes="(max-width: 768px) 100vw, 1500px"
              alt="White Blue Trucks"
            />

            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <Link className={`${classes.button}`}>Request a Quote</Link>
          </div>
          <div className={classes.card}>
            <img
              srcset={`
    ${boxes} 1500w,
    ${boxesSmall} 768w`}
              sizes="(max-width: 768px) 100vw, 1500px"
              alt="Boxes"
            />
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
            <Link className={`${classes.button}`}>Request a Quote</Link>
          </div>
        </div>
      </div>

      <div className={classes.capacity}>
        <h1>Capacity in any market at any time.</h1>
        {/* <ParallaxBanner
          className={classes.image}
          layers={[{ image: birdseye, speed: 20 }]}
        /> */}
        <Loader src={birdseye} classNameProp={classes.image} />

        {/* <img
          srcset={`${birdseye} 1500w,
              ${birdseyeSmall} 768w`}
          sizes="(max-width: 768px) 100vw, 1500px"
          alt="Birds Eye Freight"
        /> */}
        <div className={classes.cards}>
          <div className={classes.card}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
          </div>
          <div className={classes.card}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
          </div>
          <div className={classes.card}>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec,
            </p>
          </div>
        </div>
      </div>

      <div className={classes.serviceFooter}>
        <span>REQUEST A QUOTE TODAY</span>
        <h1>
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Officia commodi.
        </h1>
        <Link className={`${classes.button}`}>Get a Quote!</Link>
      </div>

      <FooterComponent />
    </div>
  );
}
