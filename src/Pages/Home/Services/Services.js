import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lit-inlet-63211.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log("mgdb: ", data);
      });
  }, []);

  return (
    <>
      {services.length === 0 ? (
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <h2 className="text-primary my-5 text-center">All Services</h2>
          <div id="services" className="container">
            <div className="services">
              {services.map((service) => (
                <Service key={service._id} service={service}></Service>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Services;
