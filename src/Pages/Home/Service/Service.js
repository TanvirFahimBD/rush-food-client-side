import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { _id, name, price, img, info } = props.service;
  return (
    <div className="singleService text-center">
      <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
        <img src={img} alt="" />
        <h3 className="m-3">{name}</h3>
        <p>{info}</p>
        <h4 className="text-primary">Repair Cost: {price}</h4>
      </Link>
    </div>
  );
};

export default Service;
