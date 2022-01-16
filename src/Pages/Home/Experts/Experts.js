import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";
import "./Experts.css";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TanvirFahimBD/all-json/main/car_repair_experts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setExperts(data);
      });
  }, []);
  return (
    <>
      {experts.length === 0 ? (
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div id="experts">
          <h2 className="text-primary my-5 text-center">Our Experts</h2>
          <div className="container">
            <div className="row">
              {experts.map((expert) => (
                <Expert key={expert.id} expert={expert}></Expert>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experts;
