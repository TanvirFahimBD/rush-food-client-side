import emailjs from "emailjs-com";
import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cxow9mx",
        e.target,
        "user_rcAPUD2XxJ9iI7GNQQIkV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
    e.target.reset();
  }
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <div className="contact container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://i.ibb.co/gMLmtHh/Computer-login-rafiki.png"
                alt=""
                style={{ width: "450px" }}
              />
            </div>
            <div className="col-lg-6 mt-5">
              <form onSubmit={sendEmail}>
                <input
                  style={{
                    width: "50%",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
                <br />
                <input
                  style={{
                    width: "50%",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                  type="text"
                  placeholder="Email Address"
                  name="email"
                />
                <br />
                <input
                  style={{
                    width: "50%",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                  type="text"
                  placeholder="Email Subject"
                  name="subject"
                />
                <br />
                <textarea
                  style={{
                    width: "50%",
                    padding: "10px",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                  placeholder="Email message"
                  name="message"
                ></textarea>
                <br />
                <button
                  className="btn btn-primary mx-3"
                  style={{ width: "50%" }}
                >
                  Send Email
                </button>
              </form>

              {message && (
                <span style={{ color: "green" }}>Thanks for your email.</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
