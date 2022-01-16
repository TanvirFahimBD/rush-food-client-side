import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="inner-container">
        <h1>About Us</h1>
        <p className="text">
          Whether you want to eat or to get delivery what you know, you’ve come
          to the right place. As a global destination for food service, we
          connect people through our service.
        </p>
        <div className="skills">
          <h6>Fast Cook</h6>
          <h6>Delivery Quick</h6>
          <h6>Best Service </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
