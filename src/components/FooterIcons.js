import React from "react";
import phone from "./../assets/footer-phone.svg";
import mail from "./../assets/footer-mail.svg";
import linkedin from "./../assets/linkedIn.svg";

const FooterIcons = () => {
  return (
    <div className="footer-icons-button">
      <img className="footer-icon__phone svg-radius" src={phone} alt="Phone" />
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
  );
};

export default FooterIcons;
