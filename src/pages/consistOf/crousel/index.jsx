import React, { useState } from "react";
import Card from "../../../shared/card";
import "./style.scss";
import { RiShoppingCart2Line } from "react-icons/ri";
const itemContain = [
  {
    image:
      "https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_14e75a560cbc411ead722de92eaf8189~mv2.webp",
    text: "1 Plant Based Reusable Cup with 2 lids",
  },
  {
    image:
      "https://static.wixstatic.com/media/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.webp",
    text: "2 Bamboo Straws",
  },
  {
    image:
      "https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp",
    text: "1 Natural Loofah",
  },
  {
    image:
      "https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.webp",
    text: "1 Bamboo Toothbrush",
  },
  {
    image:
      "https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp",
    text: "1 box of 50 Bamboo Cotton Eartips",
  },
];
const Crousel = () => {
  const [index, setIndex] = useState(0);
    console.log("render");
    const cardInterval = setInterval(() => {
      index ===4 ? setIndex(0) : setIndex(index+1);
      console.log(index);
      clearInterval(cardInterval);
    }, 3000);
    
  

  return (
    <div className="crousel-wrapper">
      <Card
        buttonIcon={<RiShoppingCart2Line />}
        key={itemContain[index].image}
        buttonText="Buy Now"
        image={itemContain[index].image}
        text={itemContain[index].text}
      />
    </div>
  );
};

export default Crousel;
