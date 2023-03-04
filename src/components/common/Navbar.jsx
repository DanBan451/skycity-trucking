import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import logo from "../../images/company-logo.png";
import globe from "../../images/home/globe.svg";
import classes from "../../styles/navbar.module.css";

function NavBarComponent({ navigation }) {
  const [language, setLanguage] = useState("EN");
  const { t } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  };


  useEffect(() => {
    if (language !== i18n.language) {
      i18n.changeLanguage(language);
    }            
  }, []);

  return (
    <Navbar id={classes.navWrapper} expand="xl" className={classes.navbar}>
      <Container className="navbar-inner" fluid>
        <Navbar.Brand to="/home">
          <NavLink
            style={{ textAlign: "center", padding: 15 }}
            className={({ isActive }) =>
              `${classes.navLink} ${
                isActive ? classes.active : classes.nonActive
              }`
            }            
            to="/home"
          >
            <img src={logo} className={classes.logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`me-auto my-2 my-lg-0 ${classes.navBar}`}>
            <NavLink
              style={{ textAlign: "center", padding: 15 }}
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              id="navlink-home"
              to="/"
            >
              {t("navbar.home")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", padding: 15 }}
              to="/about"
              id="navlink-about"
            >
              {t("navbar.about")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", padding: 15 }}
              to="/services"
            >
              {t("navbar.services")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", padding: 15 }}
              to="/contact"
            >
              {t("navbar.contact")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${classes.navLink} ${
                  isActive ? classes.active : classes.nonActive
                }`
              }
              style={{ textAlign: "center", padding: 15 }}
              to="/careers"
            >
              {t("navbar.careers")}
            </NavLink>
          </Nav>
          <div className="d-flex options-container">
            <Link className="btn quote-btn" to={"/contact"}>
              {t("navbar.quote")}
            </Link>
            <Button
              className={`option`}
              style={{ color: language == "EN" ? "#017de9" : "black" }}
              onClick={() => handleLanguageChange("EN")}
            >
              ENG
            </Button>
            <Button
              className={`option`}
              style={{ color: language == "RS" ? "#017de9" : "black" }}
              onClick={() => handleLanguageChange("RS")}
            >
              PYC
            </Button>
            <Button
              className={`option`}
              style={{ color: language == "UK" ? "#017de9" : "black" }}
              onClick={() => handleLanguageChange("UK")}
            >
              YKP
            </Button>
            <img src={globe} className={classes.globe} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
