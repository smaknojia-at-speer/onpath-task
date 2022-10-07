import React from 'react';
import iphoneLeft from "./../assets/phone-left.png";
import iphoneRight from "../assets/phone-right.png";
import iphoneCenter from "../assets/phone-center.png";

const HeroImages = () => {
  return (
    <div className="d-flex hero-phones-container justify-content-center pt-5 mt-4">
    <div className="d-flex justify-content-center">
      <img
        className="hero-phone-images mt-5 mt-md-0"
        src={iphoneLeft}
        alt="Hero-images"
      />
    </div>
    <div className="mx-0 mx-md-5 d-flex justify-content-center">
      <img
        className="hero-phone-images px-5 px-md-0"
        src={iphoneCenter}
        alt="Hero-iamges"
      />
    </div>
    <div className="d-flex justify-content-center">
      <img
        className="hero-phone-images mt-5 mt-md-0"
        src={iphoneRight}
        alt="Hero-Images"
      />
    </div>
  </div>
  )
}

export default HeroImages