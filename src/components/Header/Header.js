import React, { useState } from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    NavLink
} from "react-router-dom";
import "./style.scss"

const Header = () => {
    const [color, setColor] = useState("");
    const [navbar, setNavbar] = useState(undefined);

    const ChangeBackground = () => {
        window.scrollY >= 30 ? setNavbar(true) : setNavbar(false); setColor(false)

    };

    window.addEventListener("scroll", ChangeBackground);

    return (

        <Navbar className={navbar ? "header-white" : "header"} expand="md"  >
            <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <NavLink to="/home" activeClassName="active-nav" className={color === "white" ? "nav" : "nav black "} onClick={() => { setColor("white") }} >Продукція</NavLink>
                        <NavLink to="/aboutus" activeClassName="active-nav" className={color === "white" ? "nav" : "nav black "} onClick={() => { setColor("black") }}>Про компанію</NavLink>
                        <NavLink to="/stores" activeClassName="active-nav" className={color === "white" ? "nav" : "nav black"} onClick={() => { setColor("black") }}>Фірмові магазини</NavLink>
                        <NavLink to="/documents" activeClassName="active-nav" className={color === "white" ? "nav" : "nav black"} onClick={() => { setColor("black") }}>Документи</NavLink>
                        <NavLink to="/contacts" activeClassName="active-nav" className={color === "white" ? "nav" : "nav black"} onClick={() => { setColor("black") }}>Контакти</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;