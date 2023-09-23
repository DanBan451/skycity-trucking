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

// darkfreight images
import dSmall from "../images/servicespage/darkfreight-derivatives/darkfreight-400_x_184.jpg";
import dMedium from "../images/servicespage/darkfreight-derivatives/darkfreight-800_x_369.jpg";
import dLarge from "../images/servicespage/darkfreight-derivatives/darkfreight-1200_x_554.jpg";
import dBeyond from "../images/servicespage/darkfreight-derivatives/darkfreight-1950_x_900.jpg";

// freight images
import fSmall from "../images/servicespage/freight-derivatives/freight-400_x_266.jpg";
import fMedium from "../images/servicespage/freight-derivatives/freight-800_x_533.jpg";
import fLarge from "../images/servicespage/freight-derivatives/freight-1200_x_800.jpg";
import fBeyond from "../images/servicespage/freight-derivatives/freight-1950_x_1301.jpg";

// white blue trucks images
import wSmall from "../images/servicespage/whitebluetrucks-derivatives/whitebluetrucks-400_x_266.jpg";
import wMedium from "../images/servicespage/whitebluetrucks-derivatives/whitebluetrucks-800_x_533.jpg";
import wLarge from "../images/servicespage/whitebluetrucks-derivatives/whitebluetrucks-1200_x_799.jpg";
import wBeyond from "../images/servicespage/whitebluetrucks-derivatives/whitebluetrucks-1950_x_1300.jpg";

// boxes
import bSmall from "../images/servicespage/boxes-derivatives/boxes-400_x_258.jpg";
import bMedium from "../images/servicespage/boxes-derivatives/boxes-800_x_516.jpg";
import bLarge from "../images/servicespage/boxes-derivatives/boxes-1200_x_774.jpg";
import bBeyond from "../images/servicespage/boxes-derivatives/boxes-1950_x_1259.jpg";

// birdseye
import eSmall from "../images/servicespage/birdseyefreight-derivatives/birdseyefreight-400_x_224.jpg";
import eMedium from "../images/servicespage/birdseyefreight-derivatives/birdseyefreight-800_x_449.jpg";
import eLarge from "../images/servicespage/birdseyefreight-derivatives/birdseyefreight-1200_x_673.jpg";
import eBeyond from "../images/servicespage/birdseyefreight-derivatives/birdseyefreight-1950_x_1095.jpg";

export default function Services({ navigation }) {
  const { t } = useTranslation();

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      duration: 0,
    });
  });

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
        <Loader
          src={dBeyond}
          small={dSmall}
          medium={dMedium}
          large={dLarge}
          classNameProp={classes.image}
        />
        <h1>
          Services &<br />
          Freight Solutions
        </h1>
      </div>

      <a className={classes.scrollButton} href={"#shipping"}>
        <FontAwesomeIcon
          icon="chevron-down"
          color="black"
          fontSize={40}
          className="blue-chevron"
        />
      </a>

      <div className={classes.shipping} id={"shipping"}> 
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
            <Loader
              src={fBeyond}
              small={fSmall}
              medium={fMedium}
              large={fLarge}
              classNameProp={classes.image}
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
            <Loader
              src={wBeyond}
              small={wSmall}
              medium={wMedium}
              large={wLarge}
              classNameProp={classes.image}
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
            <Loader
              src={bBeyond}
              small={bSmall}
              medium={bMedium}
              large={bLarge}
              classNameProp={classes.image}
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
        <Loader
          src={eBeyond}
          small={eSmall}
          medium={eMedium}
          large={eLarge}
          classNameProp={classes.image}
        />

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
        <Link className={`${classes.button}`} to={"/contact"}>
          Get a Quote!
        </Link>
      </div>

      <FooterComponent />
    </div>
  );
}
