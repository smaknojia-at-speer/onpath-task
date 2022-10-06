import React from "react";
import Logo from "../assets/logo.svg";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <header className="container mt-3 d-flex justify-content-between">
      <img src={Logo} className="logo-width" alt="brand" />
      <div className="d-none d-md-block">
        <CustomButton
          width={"200px"}
          bgcolour="primary"
          content="Get Started"
        />
      </div>
    </header>
  );
};

export default Header;
