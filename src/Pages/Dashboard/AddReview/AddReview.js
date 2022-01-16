import React, { useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const starRef = useRef();
  const messageRef = useRef();
  const { user } = useAuth();
  const { email } = user;

  const handleAddProduct = (e) => {
    e.preventDefault();
    const star = starRef.current.value;
    const message = messageRef.current.value;

    const newReview = { star, message, email };
    fetch("https://lit-inlet-63211.herokuapp.com/users/review", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Review added Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="text-center mt-5">
      <h1 className="text-center">Give Your Review</h1>
      <form onSubmit={handleAddProduct}>
        <input
          className="input-field"
          type="text"
          placeholder=" Star Out of 5"
          ref={starRef}
        />
        <br />
        <input
          className="input-field"
          type="text"
          placeholder=" Your Message"
          ref={messageRef}
        />
        <br />
        <input className="btn-grad" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddReview;
