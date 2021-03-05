import React from "react";
import { Link } from "react-router-dom";

const SubMenuCard = ({ item, index }) => {
  return (
    <div className="sidebar-card">
      <Link to={item.path} key={index}>
        <div className="content">
          <div className="bottle">{item.image} </div>
          <div className="description">
            <span className="title">{item.title}</span>
            <div className="vol-alc">
              <div className="column">
                <span className="title">Об'єм</span>
                <span>{item.vol}</span>
              </div>
              <div className="column">
                <span className="title">
                  {item.strength ? "Міцність" : "Вміст спирту"}
                </span>
                <span>{item.strength ? item.strength : item.alc}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SubMenuCard;
