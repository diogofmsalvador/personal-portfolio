import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./photo-gallery.css";

import { about } from "../../globals.js";

export default function PhotoGallery() {
  var settings = {
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    mobileFirst: true,
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