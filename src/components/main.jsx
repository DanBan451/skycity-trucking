import React, { img } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/common/Navbar";
import Service from "../components/common/service";
import Footer from "../components/common/Footer";

import warehouse from "../images/home/petrebels-JwMGy1h-JsY-unsplash.jpg";

import twoSemisOnRoad from "../images/home/warehouse.jpg";
// import twoSemisOnRoad from "../images/home/IMG_5421.jpg";
import semiOnRoad from "../images/home/trusted.jpg";
// import semiOnRoad from "../images/home/IMG_5417.jpg";

import largeSemi from "../images/home/Large-semi-truck-hauling-freight-on-the-open-highway-in-the-western-USA-under-an-evening-sky.jpg";
import personLookingAtComputer from "../images/home/thisisengineering-raeng-lLrZy195sIU-unsplash.jpg";

import useWindowDimensions from "../utils/useWindowDimensions";
import classes from "../styles/main.module.css";

import SlideShow from "../components/common/SlideShow";

export default function Main({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <React.Fragment>
      <NavbarComponent />

      <SlideShow />

      <div className={classes.about}>
        <h1>
          Freight services specialized in every aspect. <br /> Customized to
          your needs and delivered with excellence.
        </h1>
        <span>
          We understand today's shipping challenges and customer demands that
          require efficient performance and <br /> consistent reliability. We
          offer multiple modes and specialized services tailored to your freight
          needs.
        </span>
      </div>

      <div className={classes.services}>
        <Service
          image={warehouse}
          title={"Warehouse & Storage Services"}
          desc={`With multiple warehouse facilities in the Seattle area a total of
            90,000 square feet of warehouse space and secured 5-Acre yard with 24
            hour video Surveillance as well as an onsite Top Pick for any lifting
            needs. Whether you have cold storage or crossdocking needs, we provide
            food-grade storage solutions with warehouse software, packing and
            labeling services for all of your transportation needs.`}
          actionCall={"Get a Quote"}
          endpoint={'/contact'}          
        />
        <Service
          image={largeSemi}
          title={"Shipping Solutions"}
          desc={`With over 100 asset-based logistics equipment ranging from
          standard & super chassis, drayage, dry van, refrigerated, flatbed,
          stepdeck, and more. Nationwide pick ups, deliveries, air, rail,
          import and export services. Your one-stop shop for all of your
          transportation needs.`}
          actionCall={"Explore Our Services"}
          styles={classes.rev}
          endpoint={'/services'}          
        />
        <Service
          image={twoSemisOnRoad}
          title={"Drayage"}
          desc={`Drayage made simple with Sky City specialists. We help
          reduce the costs associated with the use of containers
          to haul freight. With access to ports nationwide, our drivers
          are TWIC equipped and are well experienced for quick
          and hassle-free export and import solutions.`}
          actionCall={"Get a Quote"}
          endpoint={'/contact'}          
        />
        <Service
          image={personLookingAtComputer}
          title={"Careers at Sky City Trucking"}
          desc={`If you are looking for a place to grow and thrive in the
          transportation business, Sky City is for you. We are looking for
          people like you to help us lead and make an impact in the
          industry. Highly competitive pay and incentives for
          company drivers, owner operators, warehouse and dispatch
          employees.`}
          actionCall={"Work for Sky City Trucking"}
          styles={classes.rev}
          endpoint={'/careers'}          
        />
        <Service
          image={semiOnRoad}
          title={"Trusted by companies like yours"}
          desc={`We're no stranger to finding solutions. We work every day to
          improve the way freight is moved for shippers across North
          America. Our services are more than just getting the job
          done, it's about providing a smooth, worry-free experience
          that contributes to our customers overall success. Our moral
          and ethical values are threaded throughout our internal
          business procedures, and this is reflected in the way we treat
          Our customers. We live and breathe our values, making sure
          your needs are met.`}
          actionCall={"Contact Us Today"}
          endpoint={'/contact'}          
        />
      </div>

      <div className={classes.buttonsWrapper}>
        <h1>Start Shipping with SkyCity Trucking Today</h1>        
        <div className={classes.buttons}>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>Get a Quote</Link>
          <Link className={`btn ${classes.quoteBtn}`} to={'/contact'}>Connect with an expert</Link>
        </div>
      </div>

      {/* <ContactButtons content={"Get in Touch with Sky City Trucking Today"} /> */}

      <Footer />
    </React.Fragment>
  );
}
