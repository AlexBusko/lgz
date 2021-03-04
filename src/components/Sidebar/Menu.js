import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import "./style.scss";

const Menu = ({ item }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
    console.log(menu)
  };
  return (
    <>
      <li className="nav-item" onClick={item.menu && showMenu}>
        <Link to={item.path}>
          <span> {item.title}</span>
        </Link>
        <ChevronRight className="arrow" />
      </li>
      {menu &&
        item.menu.map((item, index) => { return <SubMenu  key={index}  item={item}/>})}
    </>
  );
};

export default Menu;
