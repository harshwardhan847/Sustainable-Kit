import React from "react";
import Navbar from "../../components/navbar";
import "./style.scss";
import IntroContent from "./intro-content";
const intro = () => {
  return (
    <div className="intro-section" id="intro">
      <Navbar />
      <IntroContent />
    </div>
  );
};

export default intro;
