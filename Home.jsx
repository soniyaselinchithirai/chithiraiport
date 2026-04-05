import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container home-container">
                <div className="home-content">
                    <h1 className="name">Soniya Selin</h1>
                    <h2 className="title">UI/UX Designer<br/>Graphic Designer<br/>Web Developer</h2>
                    <p className="description">
                        AIML student passionate about creating intelligent and visually engaging digital experiences. Combines machine learning knowledge with UI/UX and graphic design skills to build impactful, user-focused solutions. Strong communicator and team player with a focus on problem-solving and innovation.
                    </p>

                    <div className="home-cta">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                        <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
                    </div>
                </div>
                
                <div className="home-image">
                    <div className="profile-placeholder">
                        <img src="./profile.jpg" alt="Soniya Selin" />
                    </div>
                </div>
            </div>
            
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
        </section>
    );
};

export default Home;