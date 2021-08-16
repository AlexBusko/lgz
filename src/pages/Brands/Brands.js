import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { brandsData } from "./brandsData";
import "./style.scss";

const Brands = () => {
  return (
    <Container className="brands">
      <Row xs="1" sm="2" md="4" lg="6">
        {brandsData.map(({ name, logo }) => {
          return (
            <Col className="brand">
              <img alt={name} src={logo} className="image" />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Brands;
