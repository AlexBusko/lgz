import React, { useState, useLayoutEffect } from "react"
import { Navbar, Nav, Container} from 'react-bootstrap';
import {
    NavLink, useLocation 
} from "react-router-dom";
import "./style.scss"

const Header = () => {
    const [color, setColor] = useState(true);
    const [navbar, setNavbar] = useState(undefined);
    const location = useLocation();
    
    const ChangeBackground = () => {
        window.scrollY >= 30 ? setNavbar(true) : setNavbar(false);   
        if (location.pathname === "/home") {
            window.scrollY >= 30 ? setColor(false) : setColor(true); 
        } else  {
            setColor(false)
        }
    };

    useLayoutEffect(()=> {
      location.pathname === "/home" ? setColor(true) : setColor(false);
    }, [location.pathname])
   
    window.addEventListener("scroll", ChangeBackground);

    return (

        <Navbar className={navbar ? "header-white" : "header"} expand="md"  >
            <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <NavLink to="/home" activeClassName="active-nav" className={color ? "nav" : "nav black "}  >Продукція</NavLink>
                        <NavLink to="/aboutus" activeClassName="active-nav" className={color ? "nav" : "nav black "} >Про компанію</NavLink>
                        <NavLink to="/stores" activeClassName="active-nav" className={color ? "nav" : "nav black"} >Фірмові магазини</NavLink>
                        <NavLink to="/documents" activeClassName="active-nav" className={color ? "nav" : "nav black"} >Документи</NavLink>
                        <NavLink to="/contacts" activeClassName="active-nav" className={color ? "nav" : "nav black"} >Контакти</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;