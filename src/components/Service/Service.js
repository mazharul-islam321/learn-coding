import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Service.css";

const Service = (props) => {
    const { name, price, img, description } = props.language;
    return (
        <Col md={4} className="p-3">
            <Card className="card-hover">
                <Card.Img variant="top" src={img} className="p-2 image-higth" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h6>Price:$ {price}</h6>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
