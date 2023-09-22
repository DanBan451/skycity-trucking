import React, { img, useEffect } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
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

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      duration: 0
    });
  })

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
            Shipping services that meet your <br />
            transportation & freight needs.
          </h1>
          <p>
            V&Y Horizon offers its own dedicated fleet for local, regional and
            OTR shipping needs. We operate in many modes so you can focus more
            on where things need to be and when, and less on how they'll get
            there.
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
            <h1>Rail & Port Drayage</h1>
            <p>
              Transporting goods from ports or rail with V&Y Horizon is made
              easy and clean. We are set up with all major companies that
              specialize in ports/rail ensuring smooth logistics. In addition,
              our commitment to clear communication means that you will be
              updated every step of the way.
            </p>
            <Link className={`${classes.button}`} to="/contact">
              Request a Quote
            </Link>
          </div>
          <div className={classes.card}>
            <img
              srcset={`
              ${whitebluetrucks} 1500w,
              ${whitebluetrucksSmall} 768w`}
              sizes="(max-width: 768px) 100vw, 1500px"
              alt="White Blue Trucks"
            />

            <h1>Over the Road</h1>
            <p>
              At V&Y Horizon, we handle all sorts of operations, whether it's
              expedited, dry freight, refrigerated, drop-trailer, or LTL/Partial
              shipping. If you've got something else in mind, give us a call and
              we’ll see what can do.
            </p>
            <Link className={`${classes.button}`} to="/contact">
              Request a Quote
            </Link>
          </div>
          <div className={classes.card}>
            <img
              srcset={`
    ${boxes} 1500w,
    ${boxesSmall} 768w`}
              sizes="(max-width: 768px) 100vw, 1500px"
              alt="Boxes"
            />
            <h1>Less-Than-Truckload Cartage</h1>
            <p>
              We provide robust Less-Than-Truckload Cartage (LTL) services.
              Major LTL shipping companies choose us as their cartage partner
              because of our deep-seated commitment to clear communication and
              our hard-working customer service.
            </p>
            <Link className={`${classes.button}`} to="/contact">
              Request a Quote
            </Link>
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
            <h1>Dedicated Fleet Service</h1>
            <p>
              At V&Y Horizon, we offer a variety of asset based solutions for
              shippers of all sizes. You can be sure that you're getting the
              best service every time and on time with our dry van, temperature
              controlled, intermodal & drayage solutions.
            </p>
          </div>
          <div className={classes.card}>
            <h1>One Stop for Success</h1>
            <p>
              Our trusted and safe team is always reliable, always growing, and
              always there for you, 24/7.
            </p>
          </div>
          <div className={classes.card}>
            <h1>Old-School & Robust</h1>
            <p>
              V&Y Horizon provides Old-School & Robust solutions that deliver
              your shipments safely and on-time. Our reliable and successful
              drivers are the backbone of our industry-leading reputation.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.serviceFooter}>
        <span>REQUEST A QUOTE TODAY</span>
        <h1>
          Select the ideal freight mode for your
          <br />
          cargo with V&Y Horizon.
        </h1>
        <Link className={`${classes.button}`} to={"/contact"}>Get a Quote!</Link>
      </div>

      <FooterComponent />
    </div>
  );
}
