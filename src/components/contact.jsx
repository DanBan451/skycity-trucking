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

const schema = {
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone"),
  description: Joi.string().min(10).max(300).label("Description"),  
};

export default function Contact() {
  const [data, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",  
    description: ""
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);
    if (errors) return;

    // call server
    emailjs.sendForm('service_jttihy6', 'template_kntzqvm', e.target, '9l16KYABsgoVopG9i').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));        
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

  return (
    <div>
      <NavbarComponent />
      <h1 className={classes.title}>Contact Us</h1>
      <div className={classes.contactWrapper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            label={"First Name"}
            error={errors?.firstName}
            classes={classes}
          />
          <Input
            name="lastName"
            value={data.lastName}
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
          <div className={classes.textArea}>
            <textarea
              name="description"
              value={data?.description}
              id=""
              cols="30"
              rows="10"
              placeholder="How can we help you?"
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
            // (errors.recaptcha && { border: "1px solid red" })
          />
          <button className={"btn btn-primary btn-sm"} type="submit">
            Send Message
          </button>
        </form>

        <div className={classes.content}>
          <div className={classes.text}>
            <div className={classes.item}>
              <img src={location} alt="" />
              <label htmlFor="">Headquarters: </label>
              <span>4101 Industry Dr E, Suite I, Fife, WA 98424</span>
            </div>
            <div className={classes.item}>
              <img src={mail} alt="" />
              <label htmlFor="">Email: </label>
              <span>info@skycitytrucking.com</span>
            </div>
            <div className={classes.item}>
              <img src={phone} alt="" />
              <label htmlFor="">Phone: </label>
              <span>(253) 719-8814</span>
            </div>
            <div className={classes.item}>
              <img src={fax} alt="" />
              <label htmlFor="">Fax: </label>
              <span>(000) 000-000</span>
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.item}>
              <img src={location} alt="" />
              <label htmlFor="">Branch: </label>
              <span>4101 Industry Dr E, Suite I, Fife, WA 98424</span>
            </div>
            <div className={classes.item}>
              <img src={mail} alt="" />
              <label htmlFor="">Email: </label>
              <span>info@skycitytrucking.com</span>
            </div>
            <div className={classes.item}>
              <img src={phone} alt="" />
              <label htmlFor="">Phone: </label>
              <span>(253) 719-8814</span>
            </div>
            <div className={classes.item}>
              <img src={fax} alt="" />
              <label htmlFor="">Fax: </label>
              <span>(000) 000-000</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
