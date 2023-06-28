import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./simple-slider.css";

import { about } from "../../globals.js";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  var elem = about.certifications.map(item =>
    <div className="certificates-carousel-item">
      <div className="certificate-carousel-item-logo">
        <img src={item.imagePath} alt={item.alt} />
      </div>
      <div className="certificate-carousel-item-info">
        <h6>{item.type}</h6>
        <hr />
        <h3>
          {item.name}
        </h3>
      </div>
    </div>
  );

  return (
    <
      // @ts-ignore
      Slider {...settings} className="certificates-carousel">
      {elem}
    </Slider>
  );
}