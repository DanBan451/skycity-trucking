import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

import NavbarComponent from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import main from "../images/homepage/main.jpg";
import warehouse from "../images/homepage/warehouse.jpg";
import mountain from "../images/homepage/mountain.jpg";
import wheel from "../images/homepage/handeonwheel.jpg";
import wheelSmall from "../images/homepage/wheel-1200.jpg";

import classes from "../styles/main.module.css";
import Contact from "./common/contact";

export default function Main({ navigation }) {
  const { t } = useTranslation();

  const words = ["Transportation", "Warehousing", "Drayage"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex + 1 >= words.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={classes.blueprint}>
        <div className={classes.stream1}></div>
      </div>
      <div className={classes.wrapper}>
        <ParallaxBanner
          className={classes.header}
          layers={[{ image: main, speed: 20 }]}
        >
          <div className={classes.divider}>
            <h1>
              Old-School Robust Services
              <br />
              With Modern
              <span className={classes["words-wrapper"]}>
                <span>Ghost</span>
                {words.map((word, i) => (
                  <b
                    className={`${
                      index === i ? classes["is-visible"] : classes["is-hidden"]
                    }`}
                    key={i}
                  >
                    {word}
                  </b>
                ))}
              </span>
              <br />
              You Can Count On!
            </h1>
            <div>
              <Link className={`btn ${classes.button}`} to={"/contact"}>
                Get a Quote!
              </Link>
              <Link className={`btn ${classes.button}`} to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={classes.pulseWrapper}>
            <div className={classes.pulse}>
              <h1>Let's Talk!</h1>
            </div>
            <div
              className={`${classes["circle"]} ${classes["cirlce-1"]}`}
            ></div>
            <div
              className={`${classes["circle"]} ${classes["cirlce-2"]}`}
            ></div>
            <div
              className={`${classes["circle"]} ${classes["cirlce-3"]}`}
            ></div>
          </div>
        </ParallaxBanner>

        <div className={`${classes.service} ${classes.rev}`}>
          <ParallaxBanner
            className={classes.serviceImage}
            layers={[{ image: warehouse, speed: 20 }]}
          />
          <div className={classes.serviceContent}>
            <h1>{"Why V&Y Horizon?"}</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo
            </span>
            <Link className={`${classes.serviceBtn}`} to={""}>
              Learn more
            </Link>
          </div>
        </div>

        <div className={classes.shippingService}>
          <span>SHIPPING SERVICES</span>
          <h1>
            Shipping Services to fill your logistics and transportation
            operations.
          </h1>
          <ParallaxBanner
            className={classes.shippingImage}
            layers={[{ image: mountain, speed: 20 }]}
          ></ParallaxBanner>
          <div className={classes.cards}>
            <div className={classes.card}>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <Link className={`${classes.button}`}>Learn more</Link>
            </div>
            <div className={classes.card}>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <Link className={`${classes.button}`}>Learn more</Link>
            </div>
            <div className={classes.card}>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <Link className={`${classes.button}`}>Learn more</Link>
            </div>
          </div>
        </div>

        <div className={classes.about} id="section1">
          <span>What we do</span>
          <h1>Lorem ipsum dolor sit amet, consectetuer</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam
          </span>
        </div>
        <ParallaxBanner
          className={classes.bottomHeader}
          layers={[{ image: wheel, speed: 20 }]}
        >
          <div className={classes.divider}>
            <span>JOIN OUR TEAM</span>
            <div>
              <h1>Careers at V&Y Horizon</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </span>
            </div>
            <Link className={`btn ${classes.button}`} to={"/contact"}>
              Join Our Team
            </Link>
          </div>
        </ParallaxBanner>

        <Contact />

        {/* <div className={classes.services}>
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
        </div> */}

        {/* <div className={classes.buttonsWrapper}>
          <h1>{t("main.buttonsWrapper.h1")}</h1>
          <div className={classes.buttons}>
            <Link className={`btn ${classes.quoteBtn}`} to={"/contact"}>
              {t("main.buttonsWrapper.Link_1")}
            </Link>
            <Link className={`btn ${classes.quoteBtn}`} to={"/contact"}>
              {t("main.buttonsWrapper.Link_2")}
            </Link>
          </div>
        </div> */}

        {/* <ContactButtons content={"Get in Touch with Sky City Trucking Today"} /> */}
        <Footer />
      </div>
    </React.Fragment>
  );
}
