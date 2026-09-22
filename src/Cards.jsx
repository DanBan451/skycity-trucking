import React from "react";
import { Link } from "react-router-dom";

import drayage from "./images/services/drayage.jpg";
import dedicated from "./images/services/dedicated.jpg";
import warehouse from "./images/services/warehouse.jpg";
import oversize from "./images/services/oversize.jpg";
import intermodal from "./images/services/intermodal.jpg";
import lessThanTruckload from "./images/services/lessThanTruckload.jpg";

// Placeholder images until final photos are supplied for each capability.
const sectionImages = [
  drayage,           // Port Drayage & Container Services
  dedicated,         // Transportation
  warehouse,         // Warehousing & Distribution
  oversize,          // Transloading, Breakbulk & Project Cargo
  intermodal,        // Secure Yard & Container Storage
  lessThanTruckload, // 3PL & Logistics Management
];

const Cards = ({ classes, t }) => {
  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  const sections = sectionImages.map((image, index) => {
    const base = `services.section_${index + 1}`;
    return {
      image,
      title: t(`${base}.h1`),
      intro: list(`${base}.intro`),
      listHeader: t(`${base}.list-header`),
      items: list(`${base}.items`),
      outro: list(`${base}.outro`),
    };
  });

  return (
    <>
      {sections.map((section, index) => (
        <div className={classes.capability} key={index}>
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${section.image})` }}
          />
          <div className={classes.body}>
            <h1>{section.title}</h1>
            {section.intro.map((paragraph, i) => (
              <p key={`intro-${i}`}>{paragraph}</p>
            ))}
            <p className={classes.listHeader}>{section.listHeader}</p>
            <ul>
              {section.items.map((item, i) => (
                <li key={`item-${i}`}>{item}</li>
              ))}
            </ul>
            {section.outro.map((paragraph, i) => (
              <p key={`outro-${i}`}>{paragraph}</p>
            ))}
            <Link className={`btn ${classes.ctaBtn}`} to="/contact">
              {t("services.cta")}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
