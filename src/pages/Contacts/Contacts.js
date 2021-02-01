import React, { } from "react"
import { Row, Col, Container } from "react-bootstrap"
import { CompassFill } from 'react-bootstrap-icons'
import "./style.scss"


const Contacts = () => {
    return (
        <Container>
            <Row className="contacts">
                <Col md={6} className="cols">
                    <h1>Зв’яжіться з нами</h1>
                    <h3>ПрАТ “Львівський лікеро-горілчаний завод”</h3>
                    <span><span><CompassFill color={"#0871B2"} className="icons" />Адреса: </span>вул. Мирона Кордуби, 2, м.Львів, 79024</span>
                    <span><span>Телефон: </span>+380 (32) 294-87-78</span>
                    <span><span>Факс: </span>+380 (32) 293-89-80 </span>
                    <span><span>E-mail: </span>lgz@lgz.lviv.net</span>
                    <span><span>Бухгалтерія: </span>+380 (32) 294-93-35, +380 (32) 294-93-34</span>
                    <span>
                        <span>Відділ експортних продажів: </span>
                        <span className="number">
                            <span>+380 (32) 294-87-84,</span>
                            <span>+380 (32) 294-87-97</span></span>
                    </span>
                    <span><span>E-mail: </span> zev@lgz.lviv.net</span>

                </Col>
                <Col md={6} className="cols">
                    <h1>Дистрибуція</h1>
                    <h2>м. Львів і Львівська область</h2>
                    <span>ТзОВ “Львівський лікеро-горілчаний Торговий дім”</span>
                    <span><span><CompassFill color={"#0871B2"} className="icons" /> Адреса:  </span>вул. Мирона Кордуби, 2a</span>
                    <span><span>Телефон: </span>+380 (32) 245-21-50</span>
                    <span><span>Факс: </span>+380 (32) 245-21-57</span>
                    <span><span>E-mail: </span>llgtd@ukr.net</span>
                    <span><span>Бухгалтерія: </span>+380 (32) 294-93-35, +380 (32) 294-93-34</span>
                    <h2>Відділ з регіонального продажу</h2>
                    <span><span>Телефон </span>+380 (32) 294-87-84, +380 (32) 294-87-97</span>
                </Col>
            </Row>

        </Container>

    );
}

export default Contacts;