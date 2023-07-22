import React from "react";

export const Hero = () => {
  return (
    <div id="hero" className="bg-hero">
      <div className="headline">
        <div className="wrap-text">
          <h5>Detikfinance Business Plan Competition 2023</h5>
          <h1>EMPOWERING INDONESIA STARTUP</h1>
          <p>
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk
            menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
            perhatian dari venture capital atau angel investor
          </p>
        </div>
        <button type="button" className="btn main-regist-btn">
          Daftarkan startup kamu
        </button>
      </div>
    </div>
  );
};
