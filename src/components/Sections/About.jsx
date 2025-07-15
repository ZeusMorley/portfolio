import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-title">
                About Me
            </div>
            <div className="about-contents">
                <div className="left-side">
                    <div className="picture-container">
                        <img className="grad" src={('/images/grad.jpg')} alt="me" />
                    </div>
                    <div className="school-details">
                        <div className="course">
                            BS in Computer Science
                        </div>
                        <div className="school">
                            Mindanao State University - Iligan Institute of Technology
                        </div>
                        <div className="period">
                            August 2021 - June 2025
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="about-details">
                    <div className="heading">
                        <span className="normal">I'm a</span>
                        <span className="highlight">Fullstack Developer</span>
                        <span className="normal">with 2 years of experience.</span>
                    </div>
                    <div className="paragraphs">
                        <p>
                            I started with web development in my 3rd year of college through a route-planning web app, and later built a mobile app version for our thesis using React Native and Expo for Android.
                        </p>

                        <p>
                            I've also worked on projects involving machine learning—like detecting unusual car prices using K-Means and Isolation Forest, and using a Convolutional Neural Network (CNN) to classify stock candlestick trends based on shape. These projects come from different fields, but they all challenged me to learn new tools and apply them effectively.
                        </p>

                        <p>
                            While my knowledge in each area is still growing, I believe the range of technologies I’ve used shows my ability to quickly learn whatever is needed to get the job done. I make use of AI and online resources to understand new concepts and solve problems efficiently. I'm always excited to keep learning and build something useful.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;