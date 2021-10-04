import React from "react";
import useLanguage from "../../hooks/useLanguage";
import { Card, Col, Container, Row } from "react-bootstrap";

const Services = () => {
    const [languages] = useLanguage();
    return (
        <div className="service-section">
            <Container>
                <Row>
                    <h2>All Services</h2>
                    {languages.map((language) => (
                        <Col key={language.id} md={4} className="p-3">
                            <Card className="card-hover">
                                <Card.Img
                                    variant="top"
                                    src={language.img}
                                    className="p-2 image-higth"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Name: {language.name}
                                    </Card.Title>
                                    <h6>Price:$ {language.price}</h6>
                                    <Card.Text>
                                        {language.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
