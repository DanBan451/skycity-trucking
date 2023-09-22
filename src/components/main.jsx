import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ParallaxBanner } from "react-scroll-parallax";

import Reviews from "./common/Reviews";
import Loader from "./common/loader";

import FastMarquee from "react-fast-marquee";


import Contact from "./common/contact";
import Footer from "../components/common/Footer";

import classes from "../styles/main.module.css";

import main from "../images/homepage/main.jpg";
import warehouse from "../images/homepage/warehouse.jpg";
import mountain from "../images/homepage/mountain.jpg";
import wheel from "../images/homepage/handeonwheel.jpg";
// partnerships
import image1 from "../images/partnerships/Saia_logo.svg.png";
import image2 from "../images/partnerships/XPO_Logistics_logo.svg.png";
import image3 from "../images/partnerships/ABF_Freight_System_logo.svg.png";
import image4 from "../images/partnerships/GP.webp";
import image5 from "../images/partnerships/kisspng-smartway-transport-partnership-logistics-freight-t-5b0e6099d78825.0113094315276688898828.png";
import image6 from "../images/partnerships/20171101-loup-logo-vertical.png";
import image7 from "../images/partnerships/ptl-logo-emblem-outlined-rgb.svg";
import image8 from "../images/partnerships/UIIALogo.png";
import image9 from "../images/partnerships/union-pacific-logo-png-transparent.png";


export default function Main({ navigation }) {
  const { t } = useTranslation();

  const words = ["Transportation", "Warehousing", "Drayage"];
  const [index, setIndex] = useState(0);
  const [animationFlags, setAnimationFlags] = useState(
    Array(words.length).fill(false)
  );
  const partnerships = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const sections = [
    "service",
    "shippingService",
    "streamSection",
    "about",
    "streamSection2",
  ];
  const streamQueries = []; // all streams on page will be populated here
  const [streamIndex, setStreamIndex] = useState(0);

  // Function to be called when scrolling occurs
  const handleScroll = () => {
    const fixedElementTopPosition = $(".fixed").offset().top;

    // console.log("current stream index", streamIndex);
    // calculation of nth stream
    const elementTopPosition = $(`${streamQueries[streamIndex]}`).offset().top;
    if (fixedElementTopPosition >= elementTopPosition) {
      const element = $(`${streamQueries[streamIndex]}`);
      element.css("border-color", "gray");

      const parentHeight = element.parent().height();
      var maxHeightStr = element.css("max-height");

      var maxHeight;

      // Check if max-height is defined as a percentage
      if (maxHeightStr.includes("%")) {
        // If it's a percentage, set maxHeight to the parent's height
        maxHeight = parentHeight;
      } else {
        // If it's not a percentage, parse it to an integer
        maxHeight = parseInt(maxHeightStr, 10);
      }      

      let value = Math.abs(fixedElementTopPosition - elementTopPosition);
      let isFullSize = Math.abs(value > maxHeight);

      if (!isFullSize) {
        element.height(value + "px");
      } else {
        element.height(maxHeight);
        if (streamIndex == streamQueries.length - 1) {
          streamQueries.map((query) => {
            $(`${query}`).css("border-color", "#0275d8");
          });
        }
        setStreamIndex(streamIndex + 1);
      }
    } else {
      $(`${streamQueries[streamIndex]}`).css("border-color", "white");
    }
  };

  // Handle animation end for a specific element
  const handleAnimationEnd = (index) => {
    if (!animationFlags[index]) {
      // Mark the element as having completed its first animation
      const newFlags = [...animationFlags];
      newFlags[index] = true;
      setAnimationFlags(newFlags);
    }
  };

  useEffect(() => {
    // After a delay, mark all elements as "first animation done"
    const timer = setTimeout(() => {
      setAnimationFlags(Array(words.length).fill(true));
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // the goal here is to push all of the stream queries inot streamQueries
    sections.forEach((section) => {
      let sectionElement = $(`.${section}`);
      let sectionElements = sectionElement.find("*");
      let count = 1;

      sectionElements.each((index, element) => {
        if (element.classList) {
          const classNames = Array.from(element.classList);
          for (const className of classNames) {
            if (
              className.includes("stream") &&
              $(`.${section} .stream${count}`).length > 0
            ) {
              streamQueries.push(`.${section} .stream${count}`);
              count++;
              break; // Exit the loop when a "stream" class is found
            }
          }
        }
      });
    });

    streamQueries.map((query) => {
      // console.log(query);
      // $(`${query}`).css("border-color", "red");
    });

    // Attach the scroll event listener when the component mounts
    $(window).on("scroll", handleScroll);

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
      $(window).off("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [streamIndex]);

  return (
    <React.Fragment>
      <div className={`${classes.fixed} fixed`}></div>

      <div className={classes.wrapper}>
        <div
          className={classes.header}          
          // layers={[{ image: main, speed: 20 }]}          
        >        
          <Loader src={main} />
          <div className={classes.divider}>
            <h1>
              Old-School Robust Services
              <br />
              <span>
                <h1 style={{ margin: "0px", padding: "0px" }}>With Modern</h1>
              </span>
              <span className={classes["words-wrapper"]}>
                <span>Drayage</span>
                {words.map((word, i) => (
                  <b
                    className={`${
                      index === i
                        ? classes["is-visible"]
                        : animationFlags[i]
                        ? classes["is-hidden-subsequent"]
                        : classes["is-hidden-first"]
                    }`}
                    onAnimationEnd={() => handleAnimationEnd(i)}
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
              <Link className={`${classes.button}`} to={"/contact"}>
                Get a Quote!
              </Link>
              <Link className={`${classes.button}`} to={"/contact"}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={classes.pulseWrapper}>
            <Link to="/contact" className={classes.pulse}>
              <h1>Let's Talk!</h1>
            </Link>
            <div
              className={`${classes["circle"]} ${classes["circle-1"]}`}
            ></div>
            <div
              className={`${classes["circle"]} ${classes["circle-2"]}`}
            ></div>
            <div
              className={`${classes["circle"]} ${classes["circle-3"]}`}
            ></div>
          </div>
        </div>

        <FastMarquee className={classes.marqueeWrapper}>
          {partnerships.map((image, id) => (
            <img src={image} alt="" />
          ))}
        </FastMarquee>

        <div className={`${classes.service} ${classes.rev} service`}>
          <div className={`${classes.blueprint} blueprint`}>
            <div
              className={`${classes.stream1} stream1`}
              style={{ maxHeight: "100%" }}
            />
          </div>

          {/* <ParallaxBanner
            className={classes.serviceImage}
            layers={[{ image: warehouse, speed: 20 }]}
          /> */}
          
          <Loader src={warehouse} classNameProp={classes.serviceImage} />
          
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
        <div className={`${classes.shippingService} shippingService`}>
          <span>SHIPPING SERVICES</span>
          <div className={`${classes.stream1} stream1`} />
          <h1>
            Shipping Services to fill your logistics and transportation
            operations.
          </h1>
          <div className={`${classes.stream2} stream2`} />          
          
          <Loader src={mountain} classNameProp={classes.shippingImage} />
          
          <div className={`${classes.stream3} stream3`} />        
          <div style={{ height: "1px", width: "80%", margin: "-10px auto" }}>
            <div
              style={{
                height: "0px",
                borderBottomWidth: "0px",
                borderTopWidth: "2px",
              }}
              className={`${classes.stream4} stream4`}
            />
          </div>
          <div className={classes.streamDivider}>
            <div className={`${classes.stream5} stream5`} />
            <div className={`${classes.stream6} stream6`} />
            <div className={`${classes.stream7} stream7`} />
          </div>
          <div className={classes.cards}>
            <div className={`${classes.card}`}>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <Link className={`${classes.button}`}>Learn more</Link>
            </div>
            <div className={`${classes.card}`}>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
              <Link className={`${classes.button}`}>Learn more</Link>
            </div>
            <div className={`${classes.card}`}>
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
        <div className={`${classes.streamSection} streamSection`}>
          <div className={`${classes.stream1} stream1`} />
        </div>
        <div className={`${classes.about} about`} id="section1">
          <span>What we do</span>
          {/* <div style={{ height: "30px", margin: "-40px auto" }}> */}
          <div className={`${classes.stream1} stream1`} />
          {/* </div> */}
          <h1>Lorem ipsum dolor sit amet, consectetuer</h1>
          {/* <div style={{ height: "30px", margin: "-40px auto" }}> */}
          <div className={`${classes.stream2} stream2`} />
          {/* </div> */}
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
        <div className={`${classes.streamSection2} streamSection2`}>
          <div className={`${classes.stream1} stream1`} />
        </div>
        <div className={classes.bottomHeader}>
          <Loader src={wheel} classNameProp={classes.image} />
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
        </div>

        {/* <ParallaxBanner
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
        </ParallaxBanner> */}
        
        <Reviews />
          
        <Contact />        
        <Footer />
      </div>
    </React.Fragment>
  );
}
