import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import "./style.scss";

const Menu = ({ item }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <>
      <li className="nav-item" onClick={item.menu && showMenu}>
        <span> {item.title}</span>
        <ChevronRight className={menu ? "active arrow" : "arrow"} />
      </li>
      {menu &&
        item.menu.map((item, index) => {
          return <SubMenu key={index} item={item} />;
        })}
    </>
  );
};

export default Menu;
