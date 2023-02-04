import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./style.scss";
import scrollToSection from "../../utils/helper";
const Navbar = () => {
  const [nav, setNav] = useState("navbar-wrapper");
  useEffect(() => {
    setInterval(() => {
      if (window.pageYOffset > 2873) {
        setNav("top");
      } else {
        setNav("navbar-wrapper");
      }
    });
  }, []);
  return (
    <div className={`${nav}`}>
      <ul className="nav-items">
        <li
          className="nav-item"
          onClick={() => {
            window.open("https://www.earthly.ie/", "_blank");
          }}
        >
          <AiOutlineHome />
        </li>
        <li
          className="nav-item"
          onClick={() => {
            window.open("https://www.earthly.ie/shop-1", "_blank");
          }}
        >
          <AiOutlineShop />
        </li>
        <li className="nav-item">
          <AiOutlinePhone
            onClick={async () => {
              window.open("https://www.earthly.ie/#comp-la7cksh01", "_blank");
              scrollToSection("bgMedia_comp-l1gew4v9");
            }}
          />
        </li>
        <li
          className="arrow"
          onClick={() => {
            scrollToSection("intro");
          }}
        >
          <AiOutlineArrowUp />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
