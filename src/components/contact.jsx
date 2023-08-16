import React from "react";
import { useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import classes from "../styles/contact.module.css";
import Joi from "joi-browser";
import Input from "../components/common/input";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const schema = {
  name: Joi.string().required().label("Name"),
  companyName: Joi.string().required().label("Company Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone Number"),
  pickupLocation: Joi.string().required().label("Pick-up Location"),
  pickupLocationState: Joi.string().required().label("Pick-up Location State"),
  deliveryLocation: Joi.string().required().label("Delivery Location"),
  deliveryLocationState: Joi.string()
    .required()
    .label("Delivery Location State"),
  description: Joi.string().min(10).max(300).label("Description"),
  weight: Joi.label("Weight"),
  weightUnits: Joi.label("Units"),
  mode: Joi.string(),
  captcha: Joi.string().required().label("Captcha"),
};

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const weight = [
  "grams",
  "kilograms",
  "pounds",
  "ounces",
  "milligrams",
  "micrograms",
  "tonnes",
  "short tons",
  "long tons",
];
const modes = [
  "Dry Van",
  "Flatbed",
  "Refrigerated (Reefer)",
  "Tanker",
  "Intermodal",
  "Step Deck",
  "Lowboy",
  "RGN (Removable Gooseneck)",
  "Dump Truck",
  "Car Carrier",
  "Livestock Carrier",
  "Roll-off Truck",
  "Hazmat",
  "Oversize Load Carrier",
  "Logging Truck",
  "Straight Truck",
  "Doubles and Triples",
  "Auto Hauler",
  "Hotshot Truck",
];

export default function Contact() {
  const [data, setAccount] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    pickupLocationState: "",
    deliveryLocation: "",
    deliveryLocationState: "",
    weight: "",
    weightUnits: "",
    description: "",
    captcha: "",
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
    emailjs
      .sendForm(
        "service_cva7m9u",
        "template_vhuff74",
        e.target,
        "-Zp7qK6RXAtzXOwL7"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    toast.success(t("contact.toastSubmitted"));
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

  const handleChangeSelect = (name, value, required = true) => {
    console.log(data);

    if (required) {
      const error = validateProperty(name, value);

      setErrors({
        ...errors,
        [name]: error,
      });
    }

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
      console.log(errors)
      return errors;
    }
    return null;
  };

  const handleCaptchaComplete = () => {
    setAccount({
      ...data,
      ["captcha"]: "complete",
    });
  };

  return (
    <div>
      <ToastContainer />
      <NavbarComponent />
      <div className={classes.header}>
        <h1 className={classes.title}>Request a Quote Today!</h1>
        <p className={classes.subTitle}>
          Need a shipping quote? Let's work together! Submit the form and one of
          our specialists will contact you shortly.
        </p>
      </div>
      <div className={classes.contactWrapper}>
        <div className={classes.content}>
          <h1>Call or email us today!</h1>
          <span>Phone: (000) 000-000</span>
          <span>Email: email@gmail.com</span>
        </div>
        <form
          id="application-form"
          className={classes.form}
          onSubmit={handleSubmit}
          style={{ opacity: submitted ? 0.5 : 1 }}
        >
          <Input
            name="name"
            value={data.name}
            onChange={handleChange}
            label={"Name"}
            placeholder={"John Doe"}
            error={errors?.name}
            classes={classes}
          />
          <Input
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            label={"Company Name"}
            placeholder={"ABC Logistics"}
            error={errors?.companyName}
            classes={classes}
          />
          <Input
            name="email"
            value={data.email}
            onChange={handleChange}
            label={t("contact.label_3")}
            placeholder={"johndoe@domain.com"}
            error={errors?.email}
            classes={classes}
          />
          <Input
            name="phone"
            value={data?.phone}
            onChange={handleChange}
            label={t("contact.label_4")}
            placeholder={"(123) 456-7890"}
            error={errors?.phone}
            classes={classes}
          />
          <Input
            name="pickupLocation"
            value={data?.pickupLocation}
            onChange={handleChange}
            label={"Pick-up Location"}
            placeholder={"City"}
            error={errors?.pickupLocation}
            classes={classes}
          />
          <Input
            name="pickupLocationState"
            value={data?.pickupLocationState}
            label={"State"}
            placeholder={"AK"}
            error={errors?.pickupLocationState}
            classes={classes}
            select={[...states]}
            onChange={handleChangeSelect}
          />
          <Input
            name="deliveryLocation"
            value={data?.deliveryLocation}
            onChange={handleChange}
            label={"Delivery Location"}
            placeholder={"City"}
            error={errors?.deliveryLocation}
            classes={classes}
          />
          <Input
            name="deliveryLocationState"
            value={data?.deliveryLocationState}
            label={"State"}
            placeholder={"AK"}
            error={errors?.deliveryLocationState}
            classes={classes}
            select={[...states]}
            onChange={handleChangeSelect}
          />
          <div className={classes.weight}>
            <Input
              name="weight"
              value={data?.weight}
              label={"Weight"}
              placeholder={"Example: 100"}
              error={errors?.weight}
              required={false}
              classes={classes}
              onChange={handleChange}
            />
            <Input
              name="weightUnits"
              value={data?.weightUnits}
              label={"Units"}
              placeholder={"lbs"}
              error={errors?.weightUnits}
              required={false}
              classes={classes}
              select={[...weight]}
              onChange={handleChangeSelect}
            />
          </div>
          <Input
            name="mode"
            value={data?.mode}
            label={"Mode"}
            placeholder={"Equipment Type"}
            error={errors?.mode}
            required={false}
            classes={classes}
            select={[...modes]}
            onChange={handleChangeSelect}
          />
          <div className={[classes.textArea]}>
            <label className={classes.label}>Shipment Details</label>
            <textarea
              name="description"
              value={data?.description}
              id=""
              cols="30"
              rows="10"
              placeholder={"Tell us about your shipment request."}
              onChange={handleChange}
            />
            {errors?.description && (
              <div className={`alert alert-danger m-0 mb-3 ${classes.error}`}>
                {errors?.description}
              </div>
            )}
          </div>
          {(submitted || validate()) ? (
            <ReCAPTCHA
              sitekey="6LfqImYkAAAAAL8VkvEQy-uxn1x_vAYWtcsot2ZA"
              style={{ gridColumn: "1 / span 2" }}
              onChange={handleCaptchaComplete}            
            />
          ) : (
            <div></div>
          )}
          <button
            className={"btn btn-primary btn-sm"}
            type="submit"
            disabled={submitted || validate()}
          >
            {t("contact.button")}
          </button>
        </form>
      </div>
      <FooterComponent />
    </div>
  );
}
