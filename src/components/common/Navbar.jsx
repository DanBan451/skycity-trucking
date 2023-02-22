import React, { useEffect, useState } from "react";
import { IndexLink, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../images/company-logo.png";
import globe from "../../images/home/globe.svg";
import classes from "../../styles/navbar.module.css";

function NavBarComponent({ navigation }) {
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
              to="/home"
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
            >
              About Us
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
              Our Services
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
              Contact Us
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
          </Nav>
          <div className="d-flex options-container">
            <Link className="btn quote-btn" to={"/contact"}>
              Get a Quote
            </Link>
            {/* <Button className="option">ENG</Button>
            <Button className="option">PYC</Button>
            <Button className="option">YKP</Button>
            <img src={globe} className={classes.globe} /> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
