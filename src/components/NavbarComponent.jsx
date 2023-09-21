import React, { useEffect, useState } from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import logo from "../images/company-logo.png";

import classes from "../styles/navbar.module.css";

function NavBarComponent({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <div className={classes.linksWrapper}>
          <ul className={classes.linksList}>
            <div className={classes.logoWrapper}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className={classes.quoteBtn}>
          <a style={{ color: "white" }} href="/quote">
            GET A QUOTE
          </a>
        </div>

        {/* <div className={classes.options}>
          <a>ENG</a>
          <a>PYC</a>
          <a>YKP</a>
          <img src={globe} alt="" />
        </div> */}

      </div>
    </div>
  );
}

export default NavBarComponent;
