import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/main.module.css";

const Service = ({ image, title, desc, actionCall, styles, endpoint }) => { 
  return (
    <div className={`${classes.service} ${[styles]}`}>      
      <div style={{ backgroundImage: `url(${image})` }} className={`${classes.serviceImage}`} />
      <div>
        <h1>{title}</h1>
        <span>{desc}</span>
        <Link className={`btn ${classes.serviceBtn}`} to={endpoint}>{actionCall}</Link>
      </div>
    </div>    
  )
};

export default Service;
