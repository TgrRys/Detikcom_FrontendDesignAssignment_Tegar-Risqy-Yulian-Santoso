import React from "react";
import { mechanismItems } from "../utils/datas";

export const Mechanism = () => {
  return (
    <div className="bg-mechanism my-5" id="mechanism">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-7">
          <h1 className="display-6 fw-bold text-center d-flex" style={{color: "#fff"}}>MEKANISME</h1>
          </div>
          <div className="list-card col-12 col-sm-10 col-md-7">
            {mechanismItems.map((item, i) => (
              <div key={i} className="card mechanism-card">
                <div className="card-body align-items-start">
                  <img src={item.icon} alt={item.title} />

                  <div className="desc">
                    <div className="row d-flex align-items-center">
                      <h5 className="col title p-0">{item.title}</h5>

                      <h5 className="col date text-end">{item.date}</h5>
                    </div>
                    <div className="desc-list">
                      <ol>
                        {item.steps.map((step, index) => (
                          <li key={index}>
                            {i === 0 && index === 0 ? (
                              <>
                                {step.substring(0, 124)}{" "}
                                <span className="text-primary cursor-pointer">
                                  link berikut
                                </span>
                              </>
                            ) : (
                              step
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
