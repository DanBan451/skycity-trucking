import React, { img } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import { data } from "../reviews";
import { Link } from "react-router-dom";
import classes from "../styles/services.module.css";


export default function Services({ navigation }) {
  return (
    <div>
      <NavbarComponent />
      <div className={classes.header}>
        <h1 className={classes.title}>Our Services</h1>
        <span className={classes.subTitle}>
          Reliable service that you can count on. We offer capacity for every
          shipment with competitive rates. Our transportation solutions help you
          get better results, encounter fewer problems, and get more done every
          day.
        </span>
      </div>
      <div className={classes.cardsList}>
        {data.map((element) => (          
          <Link
            className={`${classes.card} ${
              element.special ? classes.special : ""
            }`}
            to={'/contact'}
          >
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${element.image})` }}
            />
            <h1>{element.service}</h1>
            <p>{element.desc}</p>
          </Link>
        ))}
      </div>

      <div className={classes.buttonsWrapper}>
        <h1>Start Shipping with SkyCity Trucking Today</h1>        
        <div className={classes.buttons}>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>Get a Quote</Link>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>Contact us Today</Link>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
