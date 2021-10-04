import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import { Container, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <Container>
                <Form>
                    <div className="form-field mb-4">
                        <Form.Control
                            className="form-width"
                            size="md"
                            type="text"
                            placeholder="Name"
                        />
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className=" mx-4 form-width"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <Form.Control
                            className="form-width"
                            size="md"
                            type="text"
                            placeholder="subject"
                        />
                    </div>
                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Message"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "130px" }}
                        />
                    </FloatingLabel>
                    <Button className="mt-4" variant="warning" size="lg">
                        SUBMIT
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
