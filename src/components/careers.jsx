import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/common/Navbar";
import FooterComponent from "../components/common/Footer";
import Joi from "joi-browser";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import Loader from "./common/loader";

// darkfreight images
import mSmall from "../images/careerspage/main-derivatives/main-400_x_266.jpg";
import mMedium from "../images/careerspage/main-derivatives/main-800_x_534.jpg";
import mLarge from "../images/careerspage/main-derivatives/main-1200_x_801.jpg";
import mBeyond from "../images/careerspage/main-derivatives/main-1950_x_1301.jpg";

// flash images
import fSmall from "../images/careerspage/flash-derivatives/flash-400_x_266.jpg";
import fMedium from "../images/careerspage/flash-derivatives/flash-800_x_533.jpg";
import fLarge from "../images/careerspage/flash-derivatives/flash-1200_x_799.jpg";
import fBeyond from "../images/careerspage/flash-derivatives/flash-1950_x_1299.jpg";

// office images
import oSmall from "../images/careerspage/darkoffice-derivatives/darkoffice-400_x_266.jpg";
import oMedium from "../images/careerspage/darkoffice-derivatives/darkoffice-800_x_532.jpg";
import oLarge from "../images/careerspage/darkoffice-derivatives/darkoffice-1200_x_800.jpg";
import oBeyond from "../images/careerspage/darkoffice-derivatives/darkoffice-1950_x_1300.jpg";

// snow truck images
import sSmall from "../images/careerspage/snowtruck-derivatives/snowtruck-400_x_600.jpg";
import sMedium from "../images/careerspage/snowtruck-derivatives/snowtruck-800_x_1200.jpg";
import sLarge from "../images/careerspage/snowtruck-derivatives/snowtruck-1200_x_1800.jpg";
import sBeyond from "../images/careerspage/snowtruck-derivatives/snowtruck-1950_x_2925.jpg";

// horizon images
import hSmall from "../images/careerspage/horizontruck-derivatives/horizontruck-400_x_600.jpg";
import hMedium from "../images/careerspage/horizontruck-derivatives/horizontruck-800_x_1199.jpg";
import hLarge from "../images/careerspage/horizontruck-derivatives/horizontruck-1200_x_1799.jpg";
import hBeyond from "../images/careerspage/horizontruck-derivatives/horizontruck-1950_x_2923.jpg";

// horizon images
import nSmall from "../images/careerspage/network-derivatives/network-400_x_249.jpg";
import nMedium from "../images/careerspage/network-derivatives/network-800_x_500.jpg";
import nLarge from "../images/careerspage/network-derivatives/network-1200_x_750.jpg";
import nBeyond from "../images/careerspage/network-derivatives/network-1950_x_1218.jpg";

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

  useEffect(() => {
    scroll.scrollToTop({
      smooth: true,
      duration: 0,
    });
  }, []);

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
            <Link className={classes.button} to="/contact">
              Let's Talk
            </Link>
          </div>
        </div>

        <p className={classes.description}>
          Discover exciting career opportunities with us in the world of{" "}
          <span>Transportation</span> excellence.
        </p>

        <div
          className={classes.banner}
          style={{ backgroundImage: `url('${fMedium}')` }}
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
            <Loader
              src={oBeyond}
              small={oSmall}
              medium={oMedium}
              large={oLarge}
              classNameProp={classes.image}
            />
            <div>
              <h1>Office Team</h1>
              <p>
                Our dedicated office team plays a crucial role in ensuring
                smooth operations and effective communication. From dispatchers
                to logistics coordinators, our knowledgeable professionals work
                diligently to support our carriers. Our priority is clear
                communication and transparency, keeping you informed about load
                assignments, pickup and delivery schedules, and any necessary
                documentation. Our goal is to create a seamless and efficient
                experience for carriers, allowing you to focus on the road.
              </p>
              <Link className={classes.button} to="/contact">
                Unlock Your Potential
              </Link>
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
            <Loader
              src={sBeyond}
              small={sSmall}
              medium={sMedium}
              large={sLarge}
              classNameProp={classes.image}
            />
            <div>
              <h1>Company Drivers</h1>
              <p>
                Our company drivers are an essential part of our team,
                representing our commitment to excellence on the road. We value
                the skills and expertise of our drivers, and we provide a
                supportive work environment that prioritizes safety, compliance,
                and professional growth. We offer competitive compensation
                packages and benefits to attract and retain the best talent in
                the industry. As a company driver at V&Y Horizon, you can expect
                fair treatment, ongoing training, and opportunities for
                advancement within our organization.
              </p>
              <Link className={classes.button} to="/contact">
                Hit the Road With Us
              </Link>
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
            <Loader
              src={hBeyond}
              small={hSmall}
              medium={hMedium}
              large={hLarge}
              classNameProp={classes.image}
            />
            <div>
              <h1>Owner Operators</h1>
              <p>
                We understand the unique needs and challenges faced by
                owner-operators, and we are committed to supporting your
                success. As an owner-operator partnering with V&Y Horizon, you
                have the freedom to run your own business while enjoying the
                benefits of our established network and resources. We will never
                promise anyone golden mountains and then deliver reality far
                from it. We offer competitive rates, realistic expectations and
                personalized support to help you optimize your operations and
                maximize profitability. We value your partnership and strive to
                create a mutually beneficial relationship based on trust,
                transparency, and open communication.
              </p>
              <Link className={classes.button} to="/contact">
                Drive Your Destiny
              </Link>
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
            <Loader
              src={nBeyond}
              small={nSmall}
              medium={nMedium}
              large={nLarge}
              classNameProp={classes.image}
            />
            <div>
              <h1>Career Network</h1>
              <p>
                Whether you are an office team member, company driver, or
                owner-operator looking for a trusted and reliable partner, we
                invite you to join our carrier network at V&Y Horizon. We
                believe in fostering a collaborative and mutually beneficial and
                a family like relationship with our employees, recognizing their
                invaluable contributions to our success. By joining our network,
                you gain access to a wide range of freight opportunities,
                personalized support, and a team dedicated to your success.
              </p>
              <Link className={classes.button} to="/contact">
                Expand Your Horizons
              </Link>
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
