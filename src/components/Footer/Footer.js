import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-css">
            <Container>
                <Row>
                    <Col>
                        <div className="icons">
                            <h1>LEARN CODE</h1>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </Col>
                    <Col>
                        <h5>Learn Code</h5>
                        <p>about</p>
                        <p>contact</p>
                    </Col>
                    <p>
                        Copyright &#169; 2021 Learn code. All rights reserved
                        for MAMUN.
                    </p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
