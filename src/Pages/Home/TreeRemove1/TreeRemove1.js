import React from "react";
import "./TreeRemove1.css";

const TreeRemove1 = () => {
  return (
    <div className="container my-5">
      <div className="row tree1-section">
        <div className="col-lg-6 col-md-12 col-sm-12  tree1">
          <img src="https://i.ibb.co/74PJGWc/Tree-Remove-1.jpg" alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 tree1-info mt-2">
          <p className="mt-5 mb-4">Professional Land & Tree Maintenance</p>
          <hr style={{ width: "5%", color: "black", fontWeight: "bold" }} />
          <h1 style={{ fontWeight: 360, fontSize: "50px" }}>
            Tree Removal <br />
            <span style={{ color: "#9CBB2D" }}>
              Is An Easy <br />
              Task
            </span>
          </h1>
          <div className="my-4" style={{ width: "60%" }}>
            <p>
              Higuera's tree service is proud to serve the comunity work at
              competitive prices.
            </p>
            <p>
              Since the start of our company we have strived to obtain the best
              quality tools so that the jobs are done to the highest standards.
            </p>
          </div>
          <a style={{ textDecoration: "none", color: "gray" }} href="#">
            Booking Now{" "}
            <i
              className=" fas fa-chevron-circle-right"
              style={{ color: "#9CBB2D" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreeRemove1;
