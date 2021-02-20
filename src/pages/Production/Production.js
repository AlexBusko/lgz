import React from "react";
import { connect } from "react-redux";
import { setShow, setHide } from "../../redux/actions.js";
import "./style.scss";

const Production = ({ setHide, setShow, visible }) => {
  const handleToggle = () => {
    visible ? setHide() : setShow();
  };

  return (
    <div className="production">
      <button onClick={handleToggle}>{visible ? "hide" : "show"}</button>
    </div>
  );
};

const mapDispatchToProps = {
  setShow,
  setHide,
};

const mapStateToProps = (state) => {
  return {
    visible: state.sidebar.visible,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Production);
