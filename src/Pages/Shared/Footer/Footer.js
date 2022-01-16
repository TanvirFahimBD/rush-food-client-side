import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="social">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram" target="_blank"></i>
          </a>
          <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
            <i className="fab fa-snapchat"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="copyright">Rush Food @2022. All rights reserved</p>
      </section>
    </div>
  );
};

export default Footer;
