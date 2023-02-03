import React from "react";
import "./style.scss";
import CallToAction from "../callToAction";
const Card = ({ image, text, buttonText, buttonIcon }) => {
  return (
    <div className="card-container ">
      <div className="card translate" style={{ backgroundImage: `url('${image}')` }}>
        <div className="card-content">
          <h3 className="text">{text}</h3>
          <CallToAction icon={buttonIcon} text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Card;
