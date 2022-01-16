import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import BookOther from "../BookOther/BookOther";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Booking.css";

const Booking = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [currentService, setCurrentService] = useState({});
  const [currentOtherService, setCurrentOtherService] = useState([]);

  // console.log("currentService", currentService);
  const { name, price, description, img } = currentService;

  useEffect(() => {
    fetch("https://lit-inlet-63211.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const serviceCurrent = data.find((u) => u._id === serviceId);
        const otherServices = data.filter((u) => u._id !== serviceId);
        const otherService = otherServices.slice(0, 2);
        console.log("serviceCurrent", serviceCurrent);
        setCurrentService(serviceCurrent);
        setCurrentOtherService(otherService);
      });
  }, []);

  const d = new Date();
  const orderedDate = d.toLocaleDateString();

  const handleOrder = (e) => {
    e.preventDefault();
    const orderInfo = {
      ...currentService,
      email: user?.email,
      date: orderedDate,
      status: "pending",
    };
    fetch("https://lit-inlet-63211.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Ordered Successfully");
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row  mt-5">
          <div className="col-lg-6" style={{ lineHeight: "50px" }}>
            <h1 className="text-primary" style={{ fontSize: "80px" }}>
              {name}
            </h1>
            <p>{description}</p>
            <h4 className="text-primary">{price}</h4>
            <Button variant="primary" onClick={handleOrder}>
              Order Now
            </Button>
            <div className="mt-3 d-flex">
              {currentOtherService.map((otherService) => (
                <BookOther
                  key={otherService._id}
                  otherService={otherService}
                ></BookOther>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <img src={img} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
