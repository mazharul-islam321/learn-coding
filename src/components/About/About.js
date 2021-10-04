import React from "react";
import img from "../../image/mamun.jpg";
import "./About.css";

const About = () => {
    return (
        <div className="about-section">
            <img className="avartar" src={img} alt="" />
            <div className="about-para">
                <p>
                    Hi! I am Mazharul Islam Mamun! I am a passionate and
                    pragmatic software engineer 2 years of professional
                    experience and I've taught over 0.1 million people how to
                    code or how to become professional software engineers
                    through my YouTube channel and online courses. I have a
                    Bachelor of Science in Software Engineering and a Master of
                    Science in Artificial Intelligence.
                </p>
                <p>
                    My mission is to make coding and software engineering
                    accessible to everyone through courses that are simple to
                    digest, and practical to implement.
                </p>
            </div>
        </div>
    );
};

export default About;
