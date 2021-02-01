import React from "react"
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { ReactComponent as LGZLogo } from "../../assets/icons/lgz-logo.svg"
import "./style.scss"

const Home = () => {

    return (
        <Jumbotron className="jumbo" fluid>
            <Container>   <Row className="home flex-xs-row"  >
                <Col sm={6}>
                    <h1 className="motto"><span>Традиції</span><br />сформовані часом</h1>
                    <p className="description" >ПрАТ “Львівський лікеро-горілчаний завод” - <br />підприємство з багатолітньою історією</p>
                </Col>
                <Col sm={6}>
                    <LGZLogo />
                </Col>
            </Row>
            </Container>


        </Jumbotron>
    )
}

export default Home;