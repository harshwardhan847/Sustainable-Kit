import React, { useEffect, useState } from "react";
import Card from "../../../shared/card";
import "./style.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
const itemContain = [
  {
    image: require("../../../images/products/asset 6.jpeg"),
    text: "1 Plant Based Reusable Cup with 2 lids",
  },
  {
    image: require("../../../images/products/asset 7.jpeg"),
    text: "2 Bamboo Straws",
  },
  {
    image: require("../../../images/products/asset 9.jpeg"),
    text: "1 Natural Loofah",
  },
  {
    image: require("../../../images/products/asset 11.jpeg"),
    text: "1 Bamboo Toothbrush",
  },
  {
    image: require("../../../images/products/asset 14.jpeg"),
  },
];
const Crousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
      setInterval(() => {
        index === 4 ? setIndex(0) : setIndex(index + 1);
        console.log("run", index);
      }, 3000)
  }, [index]);

  return (
    <div className="crousel-wrapper">
      <Card
        buttonIcon={<RiShoppingCart2Line />}
        key={itemContain[index === 0 ? "4" : index - 1].image}
        buttonText="Buy Now"
        image={itemContain[index === 0 ? "4" : index - 1].image}
        text={itemContain[index === 0 ? "4" : index - 1].text}
      />
      <Card
        buttonIcon={<RiShoppingCart2Line />}
        key={itemContain[index].image}
        buttonText="Buy Now"
        image={itemContain[index].image}
        text={itemContain[index].text}
      />
      <Card
        buttonIcon={<RiShoppingCart2Line />}
        key={itemContain[index === 4 ? "1" : index + 1].image}
        buttonText="Buy Now"
        image={itemContain[index === 4 ? "1" : index + 1].image}
        text={itemContain[index === 4 ? "1" : index + 1].text}
      />
    </div>
  );
};

export default Crousel;
