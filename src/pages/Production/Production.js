import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { setShow, setHide } from "../../redux/actions.js";
import { SidebarData } from "../../components/Sidebar/SidebarData";
import "./style.scss";
import { Container } from "react-bootstrap";

const Production = ({ setHide, setShow, visible }) => {
  
  const [product, setProduct] = useState();

  const { id } = useParams();

  const handleToggle = () => {
    visible ? setHide() : setShow();
  };

  const findNestedObj = (entireObj, idToFind, valToFind) => {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue[idToFind] === valToFind) {
        foundObj = nestedValue;
      }
      return nestedValue;
    });
    return foundObj;
  };

  useEffect(() => {
    setProduct(findNestedObj(SidebarData, "id", id));
    console.log(id);
  });

  return (
    <Container className="production">
      <div className="image">
        {product && product.image}
        <button onClick={handleToggle}>{visible ? "hide" : "show"}</button>
      </div>
      <div className="info">
        <h1>{product && product.title}</h1>
        <h1>{product && product.vol}</h1>
        <h1>{product && product.alc}</h1>
        <p>{product && product.composition}</p>
        <p>{product && product.description}</p>
      </div>
    </Container>
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
