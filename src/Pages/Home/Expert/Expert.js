import React from "react";
import "./Expert.css";

const Expert = (props) => {
  const { name, expertize, img } = props.expert;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 expert">
      <img className="img-fluid" src={img} alt="" />
      <h3 className="mt-4">{name}</h3>
      <p className="text-primary">{expertize}</p>
    </div>
  );
};

export default Expert;
