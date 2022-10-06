import React from "react";
import logo from "./../assets/logo-image.svg";
import phone from "./../assets/footer-phone.svg";
import mail from "./../assets/footer-mail.svg";
import linkedin from "./../assets/linkedIn.svg";
import FooterBrandInfo from "./FooterBrandInfo";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <FooterBrandInfo />
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
