import React from "react";
import "./index.scss";
import {
  IoIosHome,
  IoIosSearch,
  IoIosAddCircle,
  IoIosChatboxes,
  IoIosPerson
} from "react-icons/io";

const menuItems = [
  { icon: <IoIosHome size={25} />, text: "Home", link: "/home" },
  { icon: <IoIosSearch size={25} />, text: "Discover", link: "/discover" },
  { icon: <IoIosAddCircle size={35} />, text: "", link: "/add" },
  { icon: <IoIosChatboxes size={25} />, text: "Inbox", link: "/inbox" },
  { icon: <IoIosPerson size={25} />, text: "Me", link: "/me" }
];

const MenuItem = ({ selected, icon, text, link }) => {
  return (
    <div className="menu-item">
      {icon}
      <a href={link}>{text}</a>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      {menuItems.map(item => (
        <MenuItem
          key={item.text}
          selected={false}
          icon={item.icon}
          text={item.text}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Menu;
