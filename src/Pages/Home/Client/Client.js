import React from "react";
import "./Client.css";

const Client = (props) => {
  const { photoURL, displayName, star, comment } = props.client;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12  text-center">
      <img
        src={photoURL}
        alt=""
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <h5 className="my-3 text-primary">{displayName}</h5>
      <p>{star}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Client;
