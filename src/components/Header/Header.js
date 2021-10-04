import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../image/learn-coding.jpg";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>
                    <img src={logo} alt="" className="img" />
                    Learn Code
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/home"}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/services"}>
                        Services
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/contact"}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
