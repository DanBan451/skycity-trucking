import React from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
// import aboutImage from "../images/austin-distel-mpN7xjKQ_Ns-unsplash.jpg";

import classes from "../styles/quote.module.css";

export default function Quote({ navigation }) {
  return (
    <div style={{ backgroundColor: "rgb(233, 233, 233)" }}>
      <NavbarComponent />
      <div className={classes.header}>
        <h1 className={classes.title}>Get a Quote</h1>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.form}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input className={classes.spanAll} type="text" placeholder="Email" />
          <input
            className={classes.spanAll}
            type="text"
            placeholder="Company Name"
          />
          <input type="text" placeholder="Commodity" />
          <input type="text" placeholder="Mode Type" />
          <label htmlFor="">Shipping From: </label>
          <label htmlFor="">Shipping To: </label>
          <input type="text" placeholder="Enter City, State, or Zip Code" />
          <input type="text" placeholder="Enter City, State, or Zip Code" />
          <input
            className={classes.spanAll}
            type="text"
            placeholder="Equipment Type"
          />
          <input
            className={classes.spanSome}
            type="text"
            placeholder="Weight"
          />
          <input
            className={classes.spanSome}
            type="text"
            placeholder="Pallet Count"
          />
          <input
            className={classes.spanSome}
            type="text"
            placeholder="Total Dimensions"
          />
          <input
            className={classes.spanAll}
            type="text"
            placeholder="Special Instructions"
          />
          <input
            className={classes.spanAll}
            type="text"
            placeholder="Warehouse Requests"
          />
          <button className={classes.spanAll}>Submit</button>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
