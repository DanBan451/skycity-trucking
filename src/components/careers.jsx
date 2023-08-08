import React, { useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import Joi from "joi-browser";
import Input from "../components/common/input";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
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
  
  const { t } = useTranslation(); 

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
    
    toast.success(t('careers.toastMessage'));
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
          <h1>{t('careers.header-h1')}</h1>
          <img src={group} alt="" />
        </div>

        <t className={classes.description}>
          {t('careers.header-desc')}
        </t>

        <ul className={classes.careerList}>
          <div className={classes.career}>
            <img src={driver} alt="" />
            <div>
              <h1>{t('careers.career_1.h1')}</h1>
              <span>
                {t('careers.career_1.span')}
              </span>
            </div>
          </div>
          <div className={classes.career}>
            <img src={owner} alt="" />
            <div>
              <h1>{t('careers.career_2.h1')}</h1>
              <span>
                {t('careers.career_2.span')}
              </span>
            </div>
          </div>
          <div className={classes.career}>
            <img src={staff} alt="" />
            <div>
              <h1>{t('careers.career_3.h1')}</h1>
              <span>
                {t('careers.career_3.span')}
              </span>
            </div>
          </div>
        </ul>

        <div className={classes.benefitsWrapper}>
          <h1>{t('careers.benefits-h1')}</h1>

          <div className={classes.listWrapper}>
            <ul className={classes.left}>
              <li>
                <img src={ribon} alt="" />
                <span>{t('careers.benefit_1')}</span>
              </li>
              <li>
                <img src={dollar} alt="" />
                <span>{t('careers.benefit_2')}</span>
              </li>
              <li>
                <img src={clock} alt="" />
                <span>{t('careers.benefit_3')}</span>
              </li>
            </ul>
            <ul className={classes.right}>
              <li>
                <img src={thumbsup} alt="" />
                <span>{t('careers.benefit_4')}</span>
              </li>
              <li>
                <img src={arrow} alt="" />
                <span>{t('careers.benefit_5')}</span>
              </li>
              <li>
                <img src={cycle} alt="" />
                <span>{t('careers.benefit_6')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.applyWrapper}>
          <h1>{t('careers.apply-h1')}</h1>
          <form id='application-form' className={classes.form} onSubmit={handleSubmit} style={{ opacity: (submitted) ? 0.5 : 1 }}>
            <Input
              name="firstName"
              value={data?.firstName}
              onChange={handleChange}
              label={t('careers.label_1')}
              error={errors?.firstName}
              classes={classes}
            />
            <Input
              name="lastName"
              value={data?.lastName}
              onChange={handleChange}
              label={t('careers.label_2')}
              error={errors?.lastName}
              classes={classes}
            />
            <Input
              name="email"
              value={data.email}
              onChange={handleChange}
              label={t('careers.label_3')}
              error={errors?.email}
              classes={classes}
            />
            <Input
              name="phone"
              value={data?.phone}
              onChange={handleChange}
              label={t('careers.label_4')}
              error={errors?.phone}
              classes={classes}
            />
            <Input
              name="zipcode"
              value={data?.zipcode}
              onChange={handleChange}
              label={t('careers.label_5')}
              error={errors?.zipcode}
              classes={classes}
            />
            <Input
              name="state"
              value={data?.state}
              onChange={handleChange}
              label={t('careers.label_6')}
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
              {t('careers.button')}
            </button>
          </form>
        </div>

        <FooterComponent />
      </div>
    </React.Fragment>
  );
}
