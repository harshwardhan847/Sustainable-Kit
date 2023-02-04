import React from "react";
import "./style.scss";
const CallToAction = ({icon,text,action}) => {
  return <div className="call-to-action-button" onClick={action}>{text} <span className="icon">{icon}</span></div>;
};

export default CallToAction;
