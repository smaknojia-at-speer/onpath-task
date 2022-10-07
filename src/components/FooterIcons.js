import React from "react";
import {FaLinkedinIn} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {AiFillPhone} from 'react-icons/ai'

const FooterIcons = () => {
  return (
    <div className="footer-icons-button">
     <div  className="footer-icon__phone svg-radius">
      <AiFillPhone size={24} color='#4d4abf' />
     </div>
      <div className="footer-icon__mail xs-mx-3 svg-radius"><IoMdMail size={24} color='#4d4abf' /></div>
      <div className="footer-icon__mail xs-mx-3 svg-radius">
      <FaLinkedinIn size={24} color="#4d4abf" />
      </div>
    </div>
  );
};

export default FooterIcons;
