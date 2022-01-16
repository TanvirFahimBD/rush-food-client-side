import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Testimonials></Testimonials>
      <Footer />
    </div>
  );
};

export default Home;
