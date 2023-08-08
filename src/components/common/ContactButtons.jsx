import React from "react";
import classes from "../styles/contactButtons.module.css";

export default function ContactButtons({ content, styles, textStyles }) {
  return (
    <div className={classes.contactWrapper} style={styles} >
      <h1 style={textStyles}>{content}</h1>
      <div className={classes.contactButtons}>
        <button>Get a Quote</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
