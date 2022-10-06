import React from "react";
import logo from "./../assets/logo-image.svg";
import brandTitle from "./../assets/footer-brand-name.svg";
import phone from "./../assets/footer-phone.svg";
import mail from "./../assets/footer-mail.svg";
import linkedin from "./../assets/footer-linkedin.svg";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="d-flex flex-column footer-brand__names justify-content-center align-items-center">
          <img
            className="footer-brand footer-brand__names--brand-logo footer-logo-svg d-md-none"
            src={logo}
            alt="Brand"
          />
          <img
            className="footer-brand__names--brand-title"
            src={brandTitle}
            alt="Brand Name"
          />
          <p className="footer-brand__names--slogan text-center">
            Integrated web and mobile platform that allows users to track assets
            in real time, across the globe, securely.
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between">
          <img
            className="footer-logo-svg d-none d-md-block"
            src={logo}
            alt="Brand-Logo"
          />
          <p className="footer-copyright md-mb-0">
            © 2022 OnPath. All Rights Reserved.
          </p>
          <div>
            <img
              className="footer-icon__phone svg-radius"
              src={phone}
              alt="Phone"
            />
            <img
              className="footer-icon__mail xs-mx-3 svg-radius"
              src={mail}
              alt="Mail"
            />
            <img
              className="footer-icon__linkedin svg-radius "
              src={linkedin}
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
