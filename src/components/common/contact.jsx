import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/main.module.css";


export default function Contact() {
  return (
    <div className={classes.contact}>
      <span>GET IN TOUCH</span>
      <h1>
        We look forward to <br />
        hearing from you!
      </h1>
      <Link className={classes.button} to="/contact">Contact Us</Link>
    </div>
  );
}
