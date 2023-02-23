import React, { useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import Joi from "joi-browser";
import Input from "../components/common/input";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// images
import group from "../images/careers/aboutus.jpg";
import driver from "../images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up-1024x683.jpg";
import owner from "../images/careers/Truck Driver Owner Driver.jpg";
import staff from "../images/careers/arlington-research-kN_kViDchA0-unsplash.jpg";
// beneftis icons
import arrow from "../images/careers/benefits/arrow.svg";
import clock from "../images/careers/benefits/clock.svg";
import cycle from "../images/careers/benefits/cycle.svg";
import dollar from "../images/careers/benefits/dollar.svg";
import ribon from "../images/careers/benefits/ribon.svg";
import thumbsup from "../images/careers/benefits/thumbsup.svg";

import classes from "../styles/careers.module.css";

const schema = {
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone"),
  zipcode: Joi.number().required().label("Zipcode"),
  state: Joi.string().required().label("State"),
  captcha: Joi.string().required().label("Captcha")
};

export default function Careers() {
  const [data, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    state: "",
    captcha: ""
  });
  const [errors, setErrors] = useState({ });
  const [submitted, setSubmitted] = useState(false);
  // const [captcha, setCaptcha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);
    if (errors) return;

    // call server
    emailjs
      .sendForm(
        "service_l080czw",
        "template_kjwh8zl",
        e.target,
        "HPTwBnzpPBp6w8zW0"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    
    toast.success("Application Submitted!");
    var form = document.getElementById("application-form");
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = true;
    }
    setSubmitted(true);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const error = validateProperty(name, value);

    setErrors({
      ...errors,
      [name]: error,
    });

    setAccount({
      ...data,
      [name]: value !== undefined ? value : "",
    });
  };

  const validate = () => {
    const errors = {};
    const options = {
      abortEarly: false,
    };
    let { error: result } = Joi.validate(data, schema, options);
    
    if (result) {
      result.details.forEach((element) => {
        errors[element.context.key] = element.message;
      });      
      console.log(errors);
      return errors;
    }
    return null;
  };

  const validateProperty = (name, value) => {
    let obj = { [name]: value };
    let subSchema = { [name]: schema[name] };

    let { error } = Joi.validate(obj, subSchema);

    return error ? error.details[0].message : null;
  };

  const handleCaptchaComplete = () => {            
    setAccount({
      ...data,
      ['captcha']: 'complete'
    });
  }

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.careers}>
        <NavbarComponent />

        <div className={classes.header}>
          <h1>Join Our Team!</h1>
          <img src={group} alt="" />
        </div>

        <p className={classes.description}>
          We value our drivers and staff. We believe that because of our great
          team culture, Sky City Trucking would not be where it is today.
          Everyone plays a big part in our trucking family, therefore we want to
          give back and help each other succeed whatever position it may be.
        </p>

        <ul className={classes.careerList}>
          <div className={classes.career}>
            <img src={driver} alt="" />
            <div>
              <h1>Company Driver</h1>
              <span>
                Sky City Trucking offers driving opportunities with a wide range
                of equipment. We offer competitive pay along with new and
                maintained equipment, as well as an excellent lease-purchase
                program. Whether you need more miles or local work, we have
                options for you! Dedicated routes, predictable home time and
                24/7 dispatch. Flexible hours and schedules for the long
                distance driver and the local drivers. We provide our drivers
                with clean and maintained trucks. We understand that this is
                your daily workspace therefore we make sure you are comfortable.
                If you're looking for a growth opportunity, join us at Sky City
                Trucking.
              </span>
            </div>
          </div>
          <div className={classes.career}>
            <img src={owner} alt="" />
            <div>
              <h1>Owner Operator</h1>
              <span>
                We have top paying freight that keeps our owner-operators
                earning and satisfied. We area trusted and reliable carrier
                because we value our clients and our team. We offer a variety of
                services with competitive rates, |dedicated lanes, and a top
                fuel-discount program in the industry. We have on-site
                professional dispatchers and bookkeepers that are always
                available for you.
              </span>
            </div>
          </div>
          <div className={classes.career}>
            <img src={staff} alt="" />
            <div>
              <h1>Logistics Coordinator</h1>
              <span>
                We value our employees as much as we believe strongly in our
                culture and morals, that is what sets us apart in the industry.
                We're looking for hard-working and driven individuals who want
                to make an impact in oun company. We offer top pay and bonuses.
                We invite you to come join our team
              </span>
            </div>
          </div>
        </ul>

        <div className={classes.benefitsWrapper}>
          <h1>The Benefits of our Company</h1>

          <div className={classes.listWrapper}>
            <ul className={classes.left}>
              <li>
                <img src={ribon} alt="" />
                <span>Full Benefits</span>
              </li>
              <li>
                <img src={dollar} alt="" />
                <span>Bonus Pay</span>
              </li>
              <li>
                <img src={clock} alt="" />
                <span>Flexible Hours & Schedules</span>
              </li>
            </ul>
            <ul className={classes.right}>
              <li>
                <img src={thumbsup} alt="" />
                <span>Great Team Culture</span>
              </li>
              <li>
                <img src={arrow} alt="" />
                <span>Growth & Opportunity</span>
              </li>
              <li>
                <img src={cycle} alt="" />
                <span>Consistent</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.applyWrapper}>
          <h1>Apply Now!</h1>
          <form id='application-form' className={classes.form} onSubmit={handleSubmit} style={{ opacity: (submitted) ? 0.5 : 1 }}>
            <Input
              name="firstName"
              value={data?.firstName}
              onChange={handleChange}
              label={"First Name"}
              error={errors?.firstName}
              classes={classes}
            />
            <Input
              name="lastName"
              value={data?.lastName}
              onChange={handleChange}
              label={"Last Name"}
              error={errors?.lastName}
              classes={classes}
            />
            <Input
              name="email"
              value={data.email}
              onChange={handleChange}
              label={"Email"}
              error={errors?.email}
              classes={classes}
            />
            <Input
              name="phone"
              value={data?.phone}
              onChange={handleChange}
              label={"Phone Number"}
              error={errors?.phone}
              classes={classes}
            />
            <Input
              name="zipcode"
              value={data?.zipcode}
              onChange={handleChange}
              label={"Zipcode"}
              error={errors?.zipcode}
              classes={classes}
            />
            <Input
              name="state"
              value={data?.state}
              onChange={handleChange}
              label={"State"}
              error={errors?.state}
              classes={classes}
            />
            <ReCAPTCHA
              sitekey="6LfqImYkAAAAAL8VkvEQy-uxn1x_vAYWtcsot2ZA"
              style={{
                gridColumn: "1 / span 2",
                marginTop: "20px",
              }}              
              onChange={handleCaptchaComplete}
            />            
            <button className={"btn btn-primary btn-sm"} type="submit" disabled={submitted || validate()}>
              Send Message
            </button>
          </form>
        </div>

        <FooterComponent />
      </div>
    </React.Fragment>
  );
}
