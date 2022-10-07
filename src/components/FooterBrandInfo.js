import React from "react";
import logo from "./../assets/logo-image.svg";
import brandTitle from "./../assets/onpath.png";

const FooterBrandInfo = () => {
  return (
    <div className="d-flex flex-column footer-brand__names justify-content-center align-items-center ">
      <div>
        <img
          className="footer-brand footer-brand__names--brand-logo footer-logo-svg d-md-none "
          src={logo}
          alt="Brand"
        />
      </div>
      <img
        className="footer-brand__names--brand-title my-3"
        src={brandTitle}
        alt="Brand Name"
      />
      <p className="footer-brand__names--slogan font-inter text-center">
        Integrated web and mobile platform that allows users to track assets in
        real time, across the globe, securely.
      </p>
    </div>
  );
};

export default FooterBrandInfo;
