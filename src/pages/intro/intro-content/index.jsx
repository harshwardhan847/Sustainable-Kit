import React from "react";
import "./style.scss";
import mainProduct from "../../../images/mainProduct.jpeg";
import CallToAction from "../../../shared/callToAction";
import { AiOutlineShoppingCart } from "react-icons/ai";
const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="title">
        <h1 className="main-title">Sustainability Starter Kit</h1>
        <h2>starter kit is all you need to start the revolution. </h2>
        <div className="buy-now">
          <CallToAction icon={<AiOutlineShoppingCart />} text="Buy Now" />
        </div>
      </div>
      <img src={mainProduct} alt="" />
    </div>
  );
};

export default IntroContent;
