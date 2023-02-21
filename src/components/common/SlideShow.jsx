import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/slideshow.module.css";
import scrollDown from "../../images/icons8-scroll-down-100.png";

import Image1 from "../../images/home/timelab-pro-sWOvgOOFk1g-unsplash.jpg";
import Image2 from "../../images/home/IMG_5418.JPG";
import Image3 from "../../images/home/warehouse.jpg";

import openCircle from "../../images/home/icons8-circle-100.png";
import closedCircle from "../../images/home/icons8-filled-circle-100.png";

class SlideShow extends Component {
  state = {
    currentImage: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.updateImage(), 5000);
  }

  updateImage() {
    let currentImage =
      this.state.currentImage != 2 ? this.state.currentImage + 1 : 0;
    this.setState({ currentImage });
  }

  render() {
    const images = [Image1, Image2, Image3];

    return (
      <div className={classes.headerWrapper}>
        <div
          className={classes.header}
          style={{ backgroundImage: `url(${images[this.state.currentImage]})` }}
        >
          <div className={classes.headerContent}>
            <h1>
              Specializing in Transportation <br />
              Services Nationwide.
            </h1>
            <h2>
              Transportation services that help you control costs,
              <br /> increase efficiency and deliver freight solutions.
            </h2>
            <div className={classes.headerButtons}>
              <Link href="" className="btn">
                Ship with Sky City Trucking
              </Link>
              <Link href="" className="btn">
                Drive for Sky City Trucking
              </Link>
            </div>
            <a href="">
              <img src={scrollDown} alt="" />
            </a>
          </div>

          <div className={classes.pagination}>
            {images.map((image, index) => (
              <img
                src={
                  this.state.currentImage == index ? closedCircle : openCircle
                }
                alt=""
              />
            ))}
          </div>
        </div>

        <div className={classes.headerButtons}>
          <Link to='/contact' className="btn">
            Ship with Sky City Trucking
          </Link>
          <Link to='/careers' className="btn">
            Drive for Sky City Trucking
          </Link>
        </div>
      </div>
    );
  }
}

export default SlideShow;
