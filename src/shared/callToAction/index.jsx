import React from "react";
import "./style.scss";
const CallToAction = ({icon,text}) => {
  return <div className="call-to-action-button">{text} <span className="icon">{icon}</span></div>;
};

export default CallToAction;
