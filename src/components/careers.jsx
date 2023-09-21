import React, { useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ParallaxBanner } from "react-scroll-parallax";
import Loader from "./common/loader";

import main from "../images/careerspage/main.jpg";
import flash from "../images/careerspage/flash-small.png";
import office from "../images/careerspage/darkoffice.jpg";
import officeSmall from "../images/careerspage/darkoffice-small.png";
import snowtruck from "../images/careerspage/snowtruck.jpg";
import snowtruckSmall from "../images/careerspage/snowtruck-small.png";
import horizon from "../images/careerspage/horizontruck.jpg";
import horizonSmall from "../images/careerspage/horizon-small.png";
import network from "../images/careerspage/network.jpg";
import networkSmall from "../images/careerspage/network-small.png";

import classes from "../styles/careers.module.css";
import { Link } from "react-router-dom";

const schema = {
  firstName: Joi.string().required().label("First Name"),
  lastName: Joi.string().required().label("Last Name"),
  email: Joi.string().required().email({ allowTld: true }).label("Email"),
  phone: Joi.number().required().label("Phone"),
  zipcode: Joi.number().required().label("Zipcode"),
  state: Joi.string().required().label("State"),
  captcha: Joi.string().required().label("Captcha"),
};

export default function Careers() {
  const [data, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipcode: "",
    state: "",
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
        "service_l080czw",
        "template_kjwh8zl",
        e.target,
        "HPTwBnzpPBp6w8zW0"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    toast.success(t("careers.toastMessage"));
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
      ["captcha"]: "complete",
    });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className={classes.careers}>
        <div
          className={classes.header}
          // layers={[{ image: main, speed: 20 }]}
        >
          <div className={classes.content}>
            <h1>Come work with us</h1>
            <Link className={classes.button}>Current Opening</Link>
          </div>
        </div>        



        <p className={classes.description}>
          Lorem ipsum dolor sit amet <span>consectetur adipisicing</span> elit.
          Dolores a sit consectetur illo consequatur <br />
          expedita perferendis at praesentium, ipsa nulla?
        </p>

        <div
          className={classes.banner}
          style={{ backgroundImage: `url('${flash}')` }}
        >
          <h1>
            <strong>Life is a highway,</strong>
            <br /> and truckers drive the soul of the nation.
          </h1>
        </div>

        <p className={classes.description2}>
          What's your passion? Check out and check one of the tabs below!
        </p>

        <ul className={classes.careerList}>
          <div className={classes.career}>
            {/* <ParallaxBanner
              className={classes.image}
              layers={[{ image: office, speed: 20 }]}
            /> */}
            {/* <img
              src={officeSmall}
              srcset={`
    ${officeSmall} 1500w,
    ${office} 3000w
  `}
              sizes="(max-width: 1500px) 100vw, 1500px"
              alt="Dark Office"
            /> */}
            <div>
              <h1>Office Team</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aliquid commodi atque, assumenda numquam eius unde illo
                quos consequatur ipsa tenetur sequi id vero aspernatur porro,
                veniam soluta quas explicabo dignissimos incidunt adipisci,
                minima ducimus? Amet voluptatem possimus, sint iste perferendis
                optio ea maxime, incidunt libero eaque ipsam? Illo quo,
                accusantium aliquid, voluptatibus qui est velit architecto
                temporibus aut, autem odit! Dolores ratione iusto beatae
                consequatur ad doloremque unde cumque? Magnam praesentium iure
                quibusdam autem exercitationem molestiae in facilis facere!
              </p>
              <Link className={classes.button}>Unlock Your Potential</Link>
            </div>
          </div>
          <div className={classes.career}>
            {/* <ParallaxBanner
              className={classes.image}
              layers={[{ image: snowtruck, speed: 20 }]}
            /> */}
            {/* <img
              src={snowtruckSmall}
              srcset={`
    ${snowtruckSmall} 1500w,
    ${snowtruck} 3000w
  `}
              sizes="(max-width: 1500px) 100vw, 1500px"
              alt="Snow Truck"
            /> */}
            <div>
              <h1>Company Drivers</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aliquid commodi atque, assumenda numquam eius unde illo
                quos consequatur ipsa tenetur sequi id vero aspernatur porro,
                veniam soluta quas explicabo dignissimos incidunt adipisci,
                minima ducimus? Amet voluptatem possimus, sint iste perferendis
                optio ea maxime, incidunt libero eaque ipsam? Illo quo,
                accusantium aliquid, voluptatibus qui est velit architecto
                temporibus aut, autem odit! Dolores ratione iusto beatae
                consequatur ad doloremque unde cumque? Magnam praesentium iure
                quibusdam autem exercitationem molestiae in facilis facere!
              </p>
              <Link className={classes.button}>Hit the Road With Us</Link>
            </div>
          </div>
          <div className={classes.career}>
            {/* <ParallaxBanner
              className={classes.image}
              layers={[{ image: horizon, speed: 20 }]}
            /> */}
            {/* <img
              src={horizonSmall}
              srcset={`
    ${horizonSmall} 1500w,
    ${horizon} 3000w
  `}
              sizes="(max-width: 1500px) 100vw, 1500px"
              alt="Horizon Truck"
            /> */}
            <div>
              <h1>Owner Operators</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aliquid commodi atque, assumenda numquam eius unde illo
                quos consequatur ipsa tenetur sequi id vero aspernatur porro,
                veniam soluta quas explicabo dignissimos incidunt adipisci,
                minima ducimus? Amet voluptatem possimus, sint iste perferendis
                optio ea maxime, incidunt libero eaque ipsam? Illo quo,
                accusantium aliquid, voluptatibus qui est velit architecto
                temporibus aut, autem odit! Dolores ratione iusto beatae
                consequatur ad doloremque unde cumque? Magnam praesentium iure
                quibusdam autem exercitationem molestiae in facilis facere!
              </p>
              <Link className={classes.button}>Drive Your Destiny</Link>
            </div>
          </div>
          <div className={classes.career}>
            {/* <ParallaxBanner
              className={classes.image}
              layers={[{ image: network, speed: 20 }]}
            /> */}
            {/* <img
              src={networkSmall}
              srcset={`
    ${networkSmall} 1500w,
    ${network} 3000w
  `}
              sizes="(max-width: 1500px) 100vw, 1500px"
              alt="Network"
            /> */}
            <div>
              <h1>Career Network</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aliquid commodi atque, assumenda numquam eius unde illo
                quos consequatur ipsa tenetur sequi id vero aspernatur porro,
                veniam soluta quas explicabo dignissimos incidunt adipisci,
                minima ducimus? Amet voluptatem possimus, sint iste perferendis
                optio ea maxime, incidunt libero eaque ipsam? Illo quo,
                accusantium aliquid, voluptatibus qui est velit architecto
                temporibus aut, autem odit! Dolores ratione iusto beatae
                consequatur ad doloremque unde cumque? Magnam praesentium iure
                quibusdam autem exercitationem molestiae in facilis facere!
              </p>
              <Link className={classes.button}>Expand Your Horizons</Link>
            </div>
          </div>
        </ul>

        <div className={classes.careerFooter}>
          <span>Please dont forget to follow us</span>
          <ul className="social-links">
            <li>
              <Link className={classes.icon}>
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size={"2x"}
                  color="white"
                />
                <span>V&Y Horizon</span>
              </Link>
            </li>
            <li>
              <Link className={classes.icon}>
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  size={"2x"}
                  color="white"
                />
                <span>V&Y Horizon</span>
              </Link>
            </li>
            <li>
              <Link className={classes.icon}>
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  size={"2x"}
                  color="white"
                />
                <span>V&Y Horizon</span>
              </Link>
            </li>
            {/* Add more social links as needed */}
          </ul>
          <span>Thank you!</span>
        </div>

        <FooterComponent />
      </div>
    </React.Fragment>
  );
}
