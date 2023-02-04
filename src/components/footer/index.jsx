import React from "react";
import "./style.scss";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import Section from "../../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="social-icons">
            <SocialIcon color={'#ff0000'} icon={<FaYoutube/>}link='https://www.youtube.com'/>
            <SocialIcon color={'#0A66C2'} icon={<FaLinkedinIn/>}link='https://www.youtube.com'/>
            <SocialIcon color={'#E84C88'} icon={<FaInstagram/>}link='https://www.youtube.com'/>
            <SocialIcon color={'#0D2636'} icon={<FaFacebook/>}link='https://www.youtube.com'/>
            <SocialIcon color={'#0384fc'} icon={<FaTwitter/>}link='https://www.youtube.com'/>
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2023 earthly.ie | All Rights Reserved
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
