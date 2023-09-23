import React, { useState } from "react";
import classes from "../styles/quotemodal.module.css";
import Joi from "joi-browser";

import Input from "./common/input";
import Loader from "./common/loader";

// quote images
import qSmall from "../images/quoteimage-derivatives/quoteimage-400_x_266.jpg";
import qMedium from "../images/quoteimage-derivatives/quoteimage-800_x_532.jpg";
import qLarge from "../images/quoteimage-derivatives/quoteimage-1200_x_799.jpg";
import qBeyond from "../images/quoteimage-derivatives/quoteimage.jpg";

const schema = {
  name: Joi.string().required().label("Name"),
  companyName: Joi.string().required().label("Company Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone Number"),
  description: Joi.string().min(10).max(300).label("Description"),
};

const QuoteModal = ({ isOpen, onClose }) => {
  const [data, setAccount] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);
    if (errors) return;

    // call server
    // emailjs
    //   .sendForm(
    //     "service_cva7m9u",
    //     "template_vhuff74",
    //     e.target,
    //     "-Zp7qK6RXAtzXOwL7"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    onClose(true);
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
      console.log(errors);
      return errors;
    }
    return null;
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <div className={`${classes.modal} ${isOpen ? `${classes.open}` : ""}`}>
        <Loader
          src={qBeyond}
          small={qSmall}
          medium={qMedium}
          large={qLarge}
          classNameProp={classes.image}
        />
        <h1>Contact Us Today!</h1>
        <div className={classes["modal-content"]}>
          <span className={classes.close} onClick={() => onClose(false)}>
            &times;
          </span>
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
              label={"Email"}
              placeholder={"johndoe@domain.com"}
              error={errors?.email}
              classes={classes}
            />
            <Input
              name="phone"
              value={data?.phone}
              onChange={handleChange}
              label={"Phone Number"}
              placeholder={"(123) 456-7890"}
              error={errors?.phone}
              classes={classes}
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
            <button
              className={"btn btn-primary btn-sm"}
              type="submit"
              disabled={submitted || validate()}
            >
              {"Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
