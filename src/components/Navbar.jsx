import React from "react";
import { scroller } from "react-scroll";
import { logo, logo2, sideItems } from "../utils/datas";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const scrollToElement = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" onClick={() => scrollToElement("hero")} className="navbar-brand">
            <img src={logo} alt="logo" className="img-fluid mx-5" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {sideItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to="/" className="text-decoration-none" style={{color: "#fff"}} onClick={() => scrollToElement(item.scrollTo)}>
                  {item.name}
                </Link>
              </li>
            ))}

            <Link to="/register" className="btn btn-light rounded-pill" id="btn-register">
              Register
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
