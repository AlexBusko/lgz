import React, { useState } from "react"
import { Row, Col, Container } from 'react-bootstrap';
import { GeoAltFill } from 'react-bootstrap-icons';
import "./style.scss"



const Stores = () => {

    const [data] = useState(
        [{
            city: "lviv",
            shops: [
                {
                    name: "Фірмовий магазин № 2",
                    address: "м. Львів, вул. Левицького, 83",
                    link: "https://goo.gl/maps/2xsPoRcqqjfDdsYp9"
                },
                {
                    name: "Фірмовий магазин № 3",
                    address: "м. Львів, вул. Личківська, 24",
                    link: "https://goo.gl/maps/RetAMox3V99Z9FzH9"
                },
                {
                    name: "Фірмовий магазин № 4",
                    address: "м. Львів, вул. Замарсинівська, 6",
                    link: "https://goo.gl/maps/4UnymG9TnKB2jrDv7"
                },
                {
                    name: "Фірмовий магазин № 5",
                    address: "м. Львів, вул. Гавришкевича, 2",
                    link: "https://goo.gl/maps/Ci2GomB9df46w8zW6"
                },
                {
                    name: "Фірмовий магазин № 6",
                    address: "м. Львів, вул. М. Декарта, 2",
                    link: "https://goo.gl/maps/CTa2evDbEkHGqEVUA"
                },
                {
                    name: "Фірмовий магазин № 11",
                    address: "м. Львів, вул. М. Кордуби, 2",
                    link: "https://goo.gl/maps/sSpDDubxqKuMhQAS7"
                },

            ]
        },
        {
            city: "truskavets",
            shops: [{
                name: "Фірмовий магазин № 8",
                address: "м. Трускавець, вул. Шевченка, 27",
                link: "https://goo.gl/maps/8QjwbZ6gKTs3ZZZM6"
            }],

        },
        {
            city: "chervonograd",
            shops: [{
                name: "Фірмовий магазин № 10",
                address: "м. Червоноград, вул. Шевченка, 3",
                link: "https://goo.gl/maps/hbBDpUon8vTLWWFaA"
            }],

        }
        ]);

    return (
        <div className="stores">
            {data.map(e => {
                return <Container key={e.city}>
                    <h1 className="city" >Фірмові магазини у {(() => {
                        if (e.city === "lviv") { return "Львові" }
                        else if (e.city === "truskavets") {
                            return "Трускавці"
                        } else if (e.city === "chervonograd") {
                            return "Червоноргаді"
                        }

                    })()}
                    </h1>
                    <Row xs={1} md={2} lg={3}>{e.shops.map(se => <Col className="store" key={se.name}>
                        <div><p>{se.name}</p>
                            <p>{se.address}</p>
                        </div>
                        <GeoAltFill size={36} color={"#c09470"} onClick={() => { window.location.replace(se.link) }} />
                    </Col>)}
                    </Row>
                </Container>
            })}

        </div>
    );

}

export default Stores;