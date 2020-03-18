import React from "react";
import Header from "../Header";
import Display from "../Display";
import Interactions from "../Interactions";
import Menu from "../Menu";
import {
  IoIosHeart,
  IoIosChatbubbles,
  IoIosShare,
  IoIosRedo
} from "react-icons/io";

const interactions = [
  { icon: <IoIosHeart size={35} />, stat: "186.1K" },
  { icon: <IoIosChatbubbles size={35} />, stat: "580" },
  { icon: <IoIosRedo size={35} />, stat: "4763" }
];

const Home = ({ img, handleFakeScroll }) => {
  return (
    <div className="view home w-100 h-100">
      <Header handleFakeScroll={handleFakeScroll} />
      <Display img={img} />
      <Interactions interactions={interactions} />
      <Menu />
    </div>
  );
};

export default Home;
