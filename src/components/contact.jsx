import React from "react";
import { useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import classes from "../styles/contact.module.css";
import location from "../images/contact/location.svg";
import mail from "../images/contact/mail.svg";
import phone from "../images/contact/phone.svg";
import fax from "../images/contact/fax.svg";
import Joi from "joi-browser";
import Input from "../components/common/input";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const schema = {
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone"),
  description: Joi.string().min(10).max(300).label("Description"),  
  captcha: Joi.string().required().label("Captcha")
};

export default function Contact() {
  const [data, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",  
    description: "",
    captcha: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { t } = useTranslation(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);
    if (errors) return;

    // call server
    emailjs.sendForm('service_l080czw', 'template_zpqantl', e.target, 'HPTwBnzpPBp6w8zW0').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));        

    toast.success(t('contact.toastSubmitted'));
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

  const validateProperty = (name, value) => {
    let obj = { [name]: value };
    let subSchema = { [name]: schema[name] };

    let { error } = Joi.validate(obj, subSchema);

    return error ? error.details[0].message : null;
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
      return errors;
    }
    return null;      
  };
  
  const handleCaptchaComplete = () => {            
    setAccount({
      ...data,
      ['captcha']: 'complete'
    });
  }

  return (
    <div>
      <ToastContainer />
      <NavbarComponent />
      <h1 className={classes.title}>{t('contact.header-h1')}</h1>
      <div className={classes.contactWrapper}>
        <form id='application-form' className={classes.form} onSubmit={handleSubmit} style={{ opacity: (submitted) ? 0.5 : 1 }}>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            label={t('contact.label_1')}
            error={errors?.firstName}
            classes={classes}
          />
          <Input
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            label={t('contact.label_2')}
            error={errors?.lastName}
            classes={classes}
          />
          <Input
            name="email"
            value={data.email}
            onChange={handleChange}
            label={t('contact.label_3')}
            error={errors?.email}
            classes={classes}
          />
          <Input
            name="phone"
            value={data?.phone}
            onChange={handleChange}
            label={t('contact.label_4')}
            error={errors?.phone}
            classes={classes}
          />
          <div className={classes.textArea}>
            <textarea
              name="description"
              value={data?.description}
              id=""
              cols="30"
              rows="10"
              placeholder={t('contact.description')}
              onChange={handleChange}
            />
            {errors?.description && (
              <div className={`alert alert-danger m-0 mb-3 ${classes.error}`}>
                {errors?.description}
              </div>
            )}
          </div>
          <ReCAPTCHA
            sitekey="6LfqImYkAAAAAL8VkvEQy-uxn1x_vAYWtcsot2ZA"
            style={{ gridColumn: "1 / span 2" }}
            onChange={handleCaptchaComplete}
          />
            <button className={"btn btn-primary btn-sm"} type="submit" disabled={submitted || validate()}>
              {t('contact.button')}
            </button>
        </form>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.item}>
              <div>
                <img src={location} alt="" />
                <label htmlFor="">{t('contact.content_1.label')}</label>
              </div>
              <span>{t('contact.content_1.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={mail} alt="" />
                <label htmlFor="">{t('contact.content_2.label')}</label>
              </div>
              <span>{t('contact.content_2.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={phone} alt="" />
                <label htmlFor="">{t('contact.content_3.label')}</label>
              </div>
              <span>{t('contact.content_3.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={fax} alt="" />
                <label htmlFor="">{t('contact.content_4.label')}</label>
              </div>
              <span>{t('contact.content_4.span')}</span>
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.item}>
              <div>
                <img src={location} alt="" />              
                <label htmlFor="">{t('contact.content_5.label')}</label>
              </div>
              <span>{t('contact.content_5.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={mail} alt="" />
                <label htmlFor="">{t('contact.content_6.label')}</label>
              </div>
              <span>{t('contact.content_6.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={phone} alt="" />
                <label htmlFor="">{t('contact.content_7.label')}</label>
              </div>
              <span>{t('contact.content_7.span')}</span>
            </div>
            <div className={classes.item}>
              <div>
                <img src={fax} alt="" />
                <label htmlFor="">{t('contact.content_8.label')}</label>
              </div>
              <span>{t('contact.content_8.span')}</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
