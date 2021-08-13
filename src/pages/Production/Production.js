import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { setShow, setHide } from "../../redux/actions.js";
import { SidebarData } from "../../components/Sidebar/SidebarData";
import { Container } from "react-bootstrap";
import { ChevronLeft } from "react-bootstrap-icons";
import { ReactComponent as Drop } from "../../assets/icons/drop.svg";
import { ReactComponent as Bottle } from "../../assets/icons/bottle.svg";
import "./style.scss";

const Production = ({ setHide, setShow, visible }) => {
  const [product, setProduct] = useState();

  const { id, prod } = useParams();

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
    console.log(prod);
  });

  return (
    <Container className="production">
      <div className="image">
        <img
          className="product"
          src={product && product.image}
          alt={product && product.title}
        />
      </div>
      <div className="info">
        <div onClick={handleToggle} className="product-type">
          <ChevronLeft className="arrow" />
          <span>{prod === "horilky" && "Горілки"}</span>
        </div>
        <h1 className="title">
          {prod === "horilky" && "Горілка" + " "}"{product && product.title}"
        </h1>
        <div className="desk">
          <div className="column br">
            <Bottle />
            <div className="text">
              <span className="indicator">Об'єм</span>
              <span>{product && product.vol}</span>
            </div>
          </div>
          <div className="column">
            <Drop />
            <div className="text">
              <span className="indicator">
                {product && product.strength ? "Міцність" : "Вміст спирту"}
              </span>
              <span>{product && product.alc}</span>
            </div>
          </div>
        </div>
        <p className="composition">
          <span>Склад:</span>
          <br />
          {product && product.composition}
        </p>
        <p className="description">{product && product.description}</p>
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
