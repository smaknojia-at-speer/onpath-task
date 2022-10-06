import React from "react";

import FooterBrandInfo from "./FooterBrandInfo";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <hr
          style={{ width: "100%" }}
          className="horizontal-line d-md-none"
        ></hr>
        <FooterBrandInfo />
        <hr className="horizontal-line  horizontal-line-large"></hr>
        <FooterCopyRight />
      </div>
    </footer>
  );
};

export default Footer;
