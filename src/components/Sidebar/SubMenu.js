import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import SubMenuCard from "./SubMenuCard"
import "./style.scss";

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <li className="nav-item" onClick={item.subNav && showSubnav}>
          <span className="pl"> {item.title}</span>
        <ChevronRight className={subnav ? "active arrow" : "arrow"} />
      </li>
      {subnav &&
        item.subNav.map((item, index) =>  <SubMenuCard item={item} index={index} />)}
    </>
  );
};

export default SubMenu;
