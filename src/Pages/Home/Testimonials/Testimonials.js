import React, { useEffect, useState } from "react";
import Client from "../Client/Client";
import "./Testimonials.css";

const Testimonials = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://lit-inlet-63211.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
        console.log("data", data);
      });
  }, []);

  return (
    <>
      <h2 className="text-primary mt-5 text-center">Testimonials</h2>
      <h5 className="text-center mb-5 mt-2">What Our Clients Say</h5>
      <div className="container">
        <div className="row">
          {clients.map((client) => (
            <Client key={client._id} client={client}></Client>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
