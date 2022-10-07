import React from "react";

import logo from "./../assets/logo-image.svg";
import FooterIcons from "./FooterIcons";

const FooterCopyRight = () => {
  return (
    <div className="d-flex flex-column flex-column-reverse flex-md-row justify-content-md-between align-items-md-center">
      <img
        className="footer-logo-svg d-none d-md-block"
        src={logo}
        alt="Brand-Logo"
      />
      <p className="footer-copyright md-mb-0 text-center">
        © 2022 OnPath. All Rights Reserved.
      </p>
      <FooterIcons />
    </div>
  );
};

export default FooterCopyRight;
