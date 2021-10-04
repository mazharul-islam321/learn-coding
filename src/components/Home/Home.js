import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import useLanguage from "../../hooks/useLanguage";
import LearningPath from "../LearningPath/LearningPath";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
    const [languages] = useLanguage();
    const newLanguages = languages.slice(0, 6);

    return (
        <div>
            <div>
                <LearningPath></LearningPath>
            </div>
            <div className="service-section">
                <Container>
                    <Row>
                        <h2>Top-selling Courses</h2>
                        {newLanguages.map((language) => (
                            <Service
                                key={language.id}
                                language={language}
                            ></Service>
                        ))}
                    </Row>
                </Container>
            </div>
            <Link to={"/services"}>
                <button className="home-page-button">see all courses</button>
            </Link>
        </div>
    );
};

export default Home;
