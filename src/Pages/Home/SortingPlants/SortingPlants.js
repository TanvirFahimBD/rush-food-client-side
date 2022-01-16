import React from "react";
import "./SortingPlants.css";

const SortingPlants = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="image col-lg-6 col-md-6 col-sm-12">
            <img
              className="image__img"
              src="https://i.ibb.co/3z9NZDQ/banner1.jpg"
              alt=""
            />
            <div className=" image__overlay">
              <div className="image__title"> Indoor</div>
              <p className="image__description">LOW LIGHT PLANT</p>
            </div>
          </div>
          <div className="image col-lg-6 col-md-6 col-sm-12">
            <img
              className="image__img"
              src="https://i.ibb.co/RHHNjsH/banner2.jpg"
              alt=""
            />
            <div className=" image__overlay">
              <div className="image__title"> Indoor</div>
              <p className="image__description">LOW LIGHT PLANT</p>
            </div>
          </div>
        </div>
        <div className="tree__info">
          <div style={{ marginLeft: "100px" }}>
            <h2>Checkout</h2>
            <p>
              Trees nowadays Lorem ipsum dolor sit amet, <br /> consectetur
              adipiscing elit nam mattis sapien
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingPlants;
