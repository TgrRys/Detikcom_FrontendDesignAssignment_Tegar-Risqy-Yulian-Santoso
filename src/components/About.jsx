import React from "react";
import { about, facebook, play, twitter, whatsapp } from "../utils/datas";

export const About = () => {
  return (
    <div className="about">
      <div className="container">
      <div className="row row-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 justify-content-center align-items-center">
        <div className="col-12 col-xs-12 col-sm-auto col-lg-4">
          <img src={about} alt="about" srcSet="" />
        </div>
        <div className="col-12 col-xs-12 col-sm-auto col-lg-8">
          <div className="desc">
            <h3>About Detikfinance Business Plan Competition 2023</h3>
            <p>
              Detikfinance kali ini akan memberikan ruang bagi startup untuk
              networking dan memamerkan produk inovasinya di hadapan venture
              capital dan angel investor. Acara ini juga akan menghadirkan para
              pengembang teknologi dan pelaku bisnis untuk memberikan edukasi dan
              inspirasi bagi masyarakat Indonesia dan teknofilia mengenai
              perkembangan teknologi di Indonesia.
            </p>
            <div className="share-social-media">
              <h5>Share</h5>
              <a href="#"><img src={twitter} alt="twitter" /></a>
              <a href="#"><img src={whatsapp} alt="wa" /></a>
              <a href="#"><img src={facebook} alt="facebook" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
