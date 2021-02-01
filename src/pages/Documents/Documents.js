import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

import "./style.scss"

const Documents = () => {
    return (
        <Container className="documents">
            <Row>
                <Col lg={12}>
                    <h1>Сертифікати</h1>
                    <a href="https://www.w3schools.com/" target="_blank">Сертифікат на систему управління безпечністю харчових продуктів</a>
                </Col>
                <Col lg={12}>
                    <h1>Додаткова інформація</h1>
                    <h3>2020рік</h3>
                    <a href="https://www.w3schools.com/" target="_blank">Сертифікат на систему управління безпечністю харчових продуктів</a>
                </Col>
            </Row>
        </Container>

    );
}

export default Documents;