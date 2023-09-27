import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

import logo from "../../images/company-logo.png";
import classes from "../../styles/navbar.module.css";

function NavBarComponent({ handleOpenModal }) {
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
    <div>      
      <Navbar
        id={classes.navWrapper}
        expand="xl"
        className={`${classes.navbar}`}
      >
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
            <Nav className={`my-2 my-lg-0 ${classes.navBar}`}>
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
                Home
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
                About
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
                Services
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
                Careers
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
                Contact
              </NavLink>
            </Nav>
            <div className="d-flex options-container">
              <Link className="btn quote-btn" to={""} onClick={handleOpenModal}>
                Get a Quote
              </Link>              
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
    </div>
  );
}

export default NavBarComponent;
