import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { ChevronRight } from 'react-bootstrap-icons'
import "./style.scss";

const Sidebar = ({ visible }) => {
  return (
    <>
      <nav className={visible ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-item">
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
                <ChevronRight className="arrow"/>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    visible: state.sidebar.visible,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
