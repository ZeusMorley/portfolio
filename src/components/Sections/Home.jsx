import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-side">
                <div className="greeting">
                    <h4>Hello, I'm</h4>
                    <h1>Zeus Morley S. Pineda</h1>
                    <h3>Full Stack Developer</h3>
                </div>

                <div className="action-buttons">
                    <div className="button">Contact Me</div>
                    <div className="button">View Projects</div>
                    <div className="button">Resume</div>
                </div>

                <div className="socials">
                    <a className="social-icon" 
                        href="https://github.com/ZeusMorley"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub />
                    </a>

                    <a className="social-icon" 
                        href="https://www.linkedin.com/in/zeus-morley-pineda-801007194"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a className="social-icon" 
                        href="mailto:pinedazeusmorley@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="right-side">
                <div className="picture-container">
                    <img className="me" src={('/images/with_blur.jpg')} alt="me" />
                </div>
            </div>
        </div>
    );
};

export default Home;