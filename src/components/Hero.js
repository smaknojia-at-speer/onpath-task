import React from "react";
import CustomButton from "./CustomButton";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-titles">
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="hero-h1 text-primary text-uppercase">Our Mission</h1>
            <h2 className="hero-h2 text-uppercase mt-3">
              Custom Fleet <br /> Management Solutions
            </h2>
          </div>
        </div>
        <div
          href="#form"
          className="d-flex justify-content-center mt-3 pb-3 hero-button"
        >
          <CustomButton
            bgcolour="primary"
            content="Get Started"
            width={"200px"}
            href="#form"
          />
        </div>
        <HeroImages />
      </div>
    </>
  );
};

export default Hero;
