import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import "./style.scss"
import { ReactComponent as Premium } from "../../assets/brands/premium-lviv.svg"
import { ReactComponent as Volodar } from "../../assets/brands/volodar.svg"
import { ReactComponent as Volodar1 } from "../../assets/brands/volodar1.svg"
import { ReactComponent as Cetto } from "../../assets/brands/cetto.svg"
import { ReactComponent as Zoloto } from "../../assets/brands/zoloto.svg"
import { ReactComponent as Vojack } from "../../assets/brands/vojack.svg"
import { ReactComponent as StaruyRunok } from "../../assets/brands/staruy-runok.svg"
import { ReactComponent as Slava } from "../../assets/brands/slava.svg"
import { ReactComponent as Lvivska } from "../../assets/brands/lvivska.svg"
import { ReactComponent as LvivskaYuvileyna } from "../../assets/brands/lvivska-yuvileyna.svg"
import { ReactComponent as LvivskaGorilka } from "../../assets/brands/lvivska-gorilka.svg"
import { ReactComponent as LvivskaGorilka1 } from "../../assets/brands/lvivska-gorilka1.svg"
import { ReactComponent as UkranianVodka } from "../../assets/brands/ukranian-vodka.svg"
import { ReactComponent as Perfect } from "../../assets/brands/perfect.svg"
import { ReactComponent as Balsamico } from "../../assets/brands/balsamico.svg"
import { ReactComponent as Champion } from "../../assets/brands/champion.svg"
import { ReactComponent as Dnister } from "../../assets/brands/dnister.svg"
import { ReactComponent as Galicka } from "../../assets/brands/galicka.svg"
import { ReactComponent as Lemberg } from "../../assets/brands/lemberg.svg"



const Brands = () => {
    return (
        <Container className="brands">
            <Row xs="1" sm="2" md="4" lg="6">
                <Col className="brand"><Premium /></Col>
                <Col className="brand"><Zoloto /></Col>
                <Col className="brand"><Lvivska /></Col>
                <Col className="brand"><Volodar /></Col>
                <Col className="brand"><Lemberg /></Col>
                <Col className="brand"><Vojack /></Col>
                <Col className="brand"><Slava /></Col>
                <Col className="brand"><Perfect /></Col>
                <Col className="brand"><Galicka /></Col>
                <Col className="brand"><Volodar1 /></Col>
                <Col className="brand"><Champion /></Col>
                <Col className="brand"><LvivskaGorilka1 /></Col>
                <Col className="brand"><Dnister /></Col>
                <Col className="brand"><LvivskaGorilka /></Col>
                <Col className="brand"><StaruyRunok /></Col>
                <Col className="brand"><LvivskaYuvileyna /></Col>
                <Col className="brand"><UkranianVodka /></Col>
                <Col className="brand"><Cetto /> </Col>
                <Col className="brand"><Balsamico /></Col>






            </Row>
        </Container>
    );
}

export default Brands;