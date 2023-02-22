import React from "react";
import NavbarComponent from "./common/Navbar";
import FooterComponent from "./common/Footer";
import aboutImage from "../images/aboutusimage.jpg";
import arrow from "../images/blue-arrow.svg";

import classes from "../styles/about.module.css";

export default function About({ navigation }) {
  return (
    <div id={classes.about}>
      <NavbarComponent />

      <div className={classes.header}>
        <h1>About Us</h1>
        <img src={aboutImage} alt="" />
      </div>

      <div className={classes.content}>
        <div className={classes.description}>
          <p>
            We believe in providing safe and reliable services no matter the
            destination. We're dedicated to deliver the best service possible,
            putting the power of logistics to work for you. Our transportatioon
            solutions help you get better results, encounter fewer problems, and
            get more done every day. 
            <br/><br/>Specializing in cross docking services to
            help you reduce warehouse costs, shorten delivery lead times, and
            increase order fill rates. Utilizing our 90,000 sq. ft. warehouse,
            our professional and knowledgeable staff is prepared to handle all
            forms of freight from ground height to oversized. Whether you have
            an urgent, temporary or long term storage need, our warehousing team
            is equipped to create an individual plan for you.
          </p>
        </div>
        <div className={classes.features}>
          <h1>COMPANY FEATURES & SERVICES</h1>
          <ul>
            <li>
              <img src={arrow} alt="" />
              <span>Full Truckload & LTL Services Nationwide</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Drayage, Import & Export Services Nationwide</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Rail Service</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Canada Cross-Border</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Dry Van, Reefer, Flatbed, Stepdeck, Over-Sized,
Pilot Cars, Super & Standard Chassis</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Onsite Top-Pick Crane</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Air Services</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>90,000 sq. ft. Warehouse Space</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Food-grade & Temp. Controlled Storage</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Warehouse Software for Labeling & Repacking</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Dedicated Warehousing & Distribution</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Specialist</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Redeliveries</span>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>Brokerage Division</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <h1 className={classes.title}>About Us</h1>
      <div className={classes.contentWrapper}>
        <h1>Who we Are</h1>

        <div className={classes.content}>
          <span className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <div className={classes.image}>
            <img src={aboutImage} alt="" />                   
          </div>                    
        </div>

        <button className={classes.button} onClick={() => navigation.navigate("contact")}>
          Contact Us
        </button>
      </div> */}

      <FooterComponent />
    </div>
  );
}
