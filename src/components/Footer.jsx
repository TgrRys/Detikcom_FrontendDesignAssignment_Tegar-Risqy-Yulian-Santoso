import React from "react";
import {
  facebookOutline,
  instagramOutline,
  logo2,
  twitterOutline,
} from "../utils/datas";

export const Footer = () => {
  return (
      <footer className="py-5" style={{backgroundColor: "#007cbd"}}>
        <div className="row mx-5">
          <div className="col-6 col-md-2 mb-3">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <img src={logo2} alt="" srcSet="" />
              </a>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-bottom">
            <p className="col-8 me-md-auto my-auto text-white">
              Detikfinance memberikan ruang kepada para startup di Indonesia
              untuk menunjukkan, serta mempromosikan brand mereka untuk
              mendapatkan perhatian dari venture capital atau angel investor.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={instagramOutline} alt="" srcSet="" />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={facebookOutline} alt="" srcSet="" />
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <img src={twitterOutline} alt=""  srcSet=""/>
                </a>
              </li>
            </ul>
          </div>
          <p className="text-white">&copy; 2023 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
  );
};
