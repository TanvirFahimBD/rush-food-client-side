import React from "react";
import "./TreeRemove2.css";

const TreeRemove2 = () => {
  return (
    <div className="container my-5 ">
      <div className="row tree2-section">
        <div className="col-lg-6 tree2-info mb-5">
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
            <div className="d-flex">
              <div>
                <h2 style={{ color: "#9CBB2D" }}>20</h2>
                <h4 style={{ fontWeight: "300" }}>Land</h4>
              </div>
              <div className="mx-5">
                <h2 style={{ color: "#9CBB2D" }}>100+</h2>
                <h4 style={{ fontWeight: "300" }}>Expert</h4>
              </div>
            </div>
          </div>
          <a style={{ textDecoration: "none", color: "gray" }} href="#">
            Booking Now{" "}
            <i
              className=" fas fa-chevron-circle-right"
              style={{ color: "#9CBB2D" }}
            ></i>
          </a>
        </div>
        <div className="col-lg-6 tree2">
          <img src="https://i.ibb.co/ZVDtDvm/Tree-Remove-2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TreeRemove2;
