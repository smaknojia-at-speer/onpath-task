import React from "react";
import CustomButton from "./CustomButton";
import iphoneLeft from "../assets/iphone-left.png";
import iphoneRight from "../assets/iphone-right.png";
import iphoneCenter from "../assets/iphone.png";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-titles">
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="hero-h1 text-uppercase mt-3">Our Mission</h1>
            <h2 className="hero-h2 text-uppercase mt-3">
              Custom Fleet <br /> Management Solutions
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 pb-3 hero-button">
          <CustomButton bgcolour="primary" content="Get Started" />
        </div>
        <div className="d-flex hero-phones-container justify-content-center pt-5 mt-4">
          <div>
            <img
              className="hero-phone-images mt-5 mt-md-0"
              src={iphoneLeft}
              alt="Hero-images"
            />
          </div>
          <div className="mx-0 mx-md-5">
            <img
              className="hero-phone-images px-5 px-md-0"
              src={iphoneCenter}
              alt="Hero-iamges"
            />
          </div>
          <div>
            <img
              className="hero-phone-images mt-5 mt-md-0"
              src={iphoneRight}
              alt="Hero-Images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
