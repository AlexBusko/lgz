import React, { useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
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
          <span> {item.title}</span>
        </Link>
        <ChevronRight className="arrow" />
      </li> 
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <div className="sub-menu">
              <Link to={item.path} key={index}>
                <div className="content">
                  <div className="bottle">
                   {item.image} </div>
                  <div className="description">
                    <span className="title">{item.title}</span>
                    <div className="vol-alc">
                      <div className="column" >
                        <span className="title">Об'єм</span>
                        <span>{item.vol}</span>
                      </div>
                      <div className="column">
                        <span className="title">Вміст спирту</span>
                        <span>{item.alc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
