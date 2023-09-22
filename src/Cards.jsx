import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ classes, t }) => {
  const data = [
    {
      image: require("./images/services/warehouse.jpg"),
      service: t('services.card_1.h1'),
      desc: t('services.card_1.p'),
    },
    {
      image: require("./images/services/drayage.jpg"),
      service: t('services.card_2.h1'),
      desc: t('services.card_2.p'),
    },
    {
      image: require("./images/services/dedicated.jpg"),
      service: t('services.card_3.h1'),
      desc: t('services.card_3.p'),
    },
    {
      image: require("./images/services/trailer.png"),
      service: t('services.card_4.h1'),
      desc: t('services.card_4.p'),
      special: 1,
    },
    {
      image: require("./images/services/refrigerated.png"),
      service: t('services.card_5.h1'),
      desc: t('services.card_5.p'),
    },
    {
      image: require("./images/services/flatbed.png"),
      service: t('services.card_6.h1'),
      desc: t('services.card_6.p'),
      special: 1,
    },
    {
      image: require("./images/services/conestega.png"),
      service: t('services.card_7.h1'),
      desc: t('services.card_7.p'),
    },
    {
      image: require("./images/services/power_only.jpg"),
      service: t('services.card_8.h1'),
      desc: t('services.card_8.p'),
      special: 1,
    },
    {
      image: require("./images/services/lessThanTruckload.jpg"),
      service: t('services.card_9.h1'),
      desc: t('services.card_9.p'),
    },
    {
      image: require("./images/services/air.jpg"),
      service: t('services.card_10.h1'),
      desc: t('services.card_10.p'),
    },
    {
      image: require("./images/services/oversize.jpg"),
      service: t('services.card_11.h1'),
      desc: t('services.card_11.p'),
    },
    {
      image: require("./images/services/military.jpg"),
      service: t('services.card_12.h1'),
      desc: t('services.card_12.p'),
    },
    {
      image: require("./images/services/plane.jpg"),
      service: t('services.card_13.h1'),
      desc: t('services.card_13.p'),
    },
    {
      image: require("./images/services/intermodal.jpg"),
      service: t('services.card_14.h1'),
      desc: t('services.card_14.p'),
    },
    {
      image: require("./images/services/cross_border.jpg"),
      service: t('services.card_15.h1'),
      desc: t('services.card_15.p'),
    },
  ];

  return (    
      <>
        {data.map((element) => (
          <Link
            className={`${classes.card} ${
              element.special ? classes.special : ""
            }`}
            to={"/contact"}
          >
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${element.image})` }}
            />
            <h1>{element.service}</h1>
            <p>{element.desc}</p>
          </Link>
        ))}
      </>
  );
};

export default Cards;

// {data.map((element) => (          
//     <Link
//       className={`${classes.card} ${
//         element.special ? classes.special : ""
//       }`}
//       to={'/contact'}
//     >
//       <div
//         className={classes.image}
//         style={{ backgroundImage: `url(${element.image})` }}
//       />
//       <h1>{element.service}</h1>
//       <p>{element.desc}</p>
//     </Link>
//   ))}   
