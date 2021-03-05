import React from "react";
import { connect } from "react-redux";
import { SidebarData } from "./SidebarData";
import "./style.scss";
import Menu from "./Menu";

const Sidebar = ({ visible }) => {
  return (
    <>
      <nav className={visible ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {SidebarData.map((item, index) => 
            <Menu key={index} item={item} />
          )}
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
