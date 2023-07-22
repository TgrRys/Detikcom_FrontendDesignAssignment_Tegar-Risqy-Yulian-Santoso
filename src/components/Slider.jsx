import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
import { brandsImages } from "../utils/datas";

export const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <div className="container">
        <p className="title text-center">
          Dapatkan Kesempatan Dilirik Oleh Venture Capital / Angel Investor
          <br />
          Serta Menjadi Narasumber di Detikfinance
        </p>

        <Slider {...settings} className="overflow-hidden">
          {brandsImages.map((slider, index) => (
            <div key={index} className="mx-auto">
              <img src={slider.image} className="py-5" />
            </div>
          ))}
        </Slider>

        <button className="btn main-regist-btn mx-auto mb-5 d-block">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};
