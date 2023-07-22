import React from "react";
import { useState } from "react";
import { aggregatorItems } from "../utils/datas";

export const Blog = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="blog" id="latest-update">
      <div className="container my-5">
      <h1 className="display-6 fw-bold text-center d-flex" style={{color: "#007cbd"}}>LATEST UPADTE</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {aggregatorItems.map((item, index) => (
            <div key={index} className="col card border-0 article-card">
              <div className="zoom-img">
                <img src={item.image} alt={item.title} />
                <div className="card-body col-10">
                  <h6 className="card-title">{item.title}</h6>
                  <p className="card-text">1 hari yang lalu</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
