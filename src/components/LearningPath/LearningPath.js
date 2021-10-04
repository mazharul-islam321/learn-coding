import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./LearningPath.css";

const LearningPath = () => {
    return (
        <Container className="learn-path-con">
            <Row className="learn-header">
                <h2>Learning Paths</h2>
                <p>
                    Whether you're a beginner just starting out or an
                    experienced developer looking for courses to enhance your
                    skills and reach higher levels of software engineering,
                    these learning paths will help you achieve your goal.
                </p>
            </Row>
            <Row className="path-box">
                <Col className="box">
                    <h3>Fundamentals</h3>
                    <p>
                        Essential courses that anyone pursuing a career as a
                        professional software engineer should take. Data
                        structures, algorithms, design patterns, and more!
                    </p>
                    <Button variant="outline-warning">view</Button>
                </Col>
                <Col className="box">
                    <h3>Front-end Development</h3>
                    <p>
                        All the courses you need to build beautiful websites.
                        HTML, CSS, JavaScript, React, and more!
                    </p>
                    <Button variant="outline-warning">view</Button>
                </Col>
            </Row>
            <Row>
                <Col className="box">
                    <h3>Back-end Development</h3>
                    <p>
                        All the courses you need to build powerful APIs for web
                        and mobile apps. Node, Django, ASP.NET MVC, MySQL, and
                        more!
                    </p>
                    <Button variant="outline-warning">view</Button>
                </Col>
                <Col className="box">
                    <h3>Mobile Development</h3>
                    <p>
                        All the courses you need to build professional,
                        cross-platform mobile apps using React Native.
                    </p>
                    <Button variant="outline-warning">view</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LearningPath;
