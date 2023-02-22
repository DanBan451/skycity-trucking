import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/company-logo.png";
import facebookIcon from "../../images/socials/facebook.svg";
import instagramIcon from "../../images/socials/instagram.svg";
import linkedInIcon from "../../images/socials/linkedin.svg";
import classes from "../../styles/footer.module.css";

export default function FooterComponent() {
  return (
    <React.Fragment>
      <div className={classes.footerWrapper}>
        <div className={classes.footer}>
          <div className={classes.brand}>
            <img src={logo} alt="" />
            <ul className={classes.icons}>
              <h1>Follow Us</h1>
              <div>
                <a href="">
                  <img src={facebookIcon} />
                </a>
                <a href="">
                  <img src={linkedInIcon} />
                </a>
                <a href="">
                  <img src={instagramIcon} />
                </a>
              </div>
            </ul>
          </div>
          <div className={classes.links}>
            <ul>
              <li>Quick Links</li>
              <li>                
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Get a Quote</Link>
              </li>
            </ul>
          </div>
          <div className={classes.contact}>
            <ul>
              <li>Contact Information</li>
              <li><strong>Phone</strong>: (253) 719-8814</li>
              <li><strong>Email</strong>: contact@skycitytrucking.com</li>             
              <li><strong>Fax</strong>: 206.260.7200</li>             
              <li><strong>Corporate office & Warehouse Address</strong>: <br/>5555 8th St E, Ste B, Fife, Wa 98424</li>
              <li><strong>Warehouse office</strong>: 4101 Industry Dr E, Suite I, Fife, WA 98424</li>
              <li><strong>Office Hours</strong>: 5:00 AM - 6:00 PM (Monday-Friday)</li>              
              <li>For emergency/ after-hours inquiries, customer<br/>service representive is available 24/7.</li>              
            </ul>
          </div>
          <ul className={classes.icons}>
            <h1>Follow Us</h1>
            <div>
              <a href="">
                <img src={facebookIcon} />
              </a>
              <a href="">
                <img src={linkedInIcon} />
              </a>
              <a href="">
                <img src={instagramIcon} />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        <span>
          © Copyright 2022 by Sky City Trucking.
          <br />
          All Rights Reserved.
        </span>
      </div>
    </React.Fragment>
  );
}
