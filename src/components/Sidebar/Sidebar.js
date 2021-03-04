import React from "react";
import { connect } from "react-redux";
import { SidebarData } from "./SidebarData";
import "./style.scss";
import Menu from "./Menu";

const Sidebar = ({ visible }) => {
  return (
    <>
      <nav className={visible ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return <Menu key={index} item={item} />;
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
