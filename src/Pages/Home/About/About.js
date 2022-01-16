import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="our-philosophy container mt-5">
      <div className="our-philosophy row">
        <div className="philosophy col-lg-6">
          <img src="https://i.ibb.co/9Y655Qw/philosophy.jpg" alt="" />
        </div>
        <div className="philosophy col-lg-6">
          <div className="philosophy-info">
            <h1>OUR PHILOSOPHY</h1>
            <h4>We are focused on customer happy face</h4>
            <p>
              Customer have an important role to play at each stage of their
              care and the five safety tips will serve to encourage them to be
              more involved in their health.
            </p>
            <p>
              Patients have an important role to play at each stage of their
              care and the five safety tips will serve to encourage them to be
              more involved in their health.
            </p>
            <p>
              Restaurant are places of eat and be happy but there are also
              safety risks for customer, such as sick, bad feeling and
              misunderstanding that can happen despite our best efforts.
            </p>
            <button className="philosophy-btn btn btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
