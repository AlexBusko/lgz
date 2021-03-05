import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import SubMenuCard from "./SubMenuCard"
import { Link } from "react-router-dom";
import "./style.scss";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <li className="nav-item" onClick={item.subNav && showSubnav}>
        <Link to={item.path}>
          <span className="pl"> {item.title}</span>
        </Link>
        <ChevronRight className={subnav ? "active arrow" : "arrow"} />
      </li>
      {subnav &&
        item.subNav.map((item, index) =>  <SubMenuCard item={item} index={index} />)}
    </>
  );
};

export default SubMenu;
