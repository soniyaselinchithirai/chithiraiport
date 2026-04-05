import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        'Python', 'C', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'MySQL',
        'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'UI/UX Design', 'Graphic Design'
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Get to know me!</h3>
                        <p>
                            I am a Bachelor of Technology student in AIML at Kamala Institute of Technology and Science (Expected Graduation 2027, CGPA: 8.82). 
                            I'm highly passionate about creating intelligent and visually engaging digital experiences. 
                        </p>
                        <p>
                            Through virtual internships with Google and Juniper Networks, I've gained hands-on experience in Android development, AI/ML model building, and network operations. 
                            I love combining my AI/ML knowledge with UI/UX and graphic design to build impactful, user-focused solutions!
                        </p>
                        
                        <h3 className="mt-2">Education & Certificates</h3>
                        <ul className="timeline">
                            <li>
                                <h4>B.Tech in AIML</h4>
                                <span>Kamala Institute Of Technology and Science | 2023 - 2027</span>
                                <p>CGPA: 8.82</p>
                            </li>
                            <li>
                                <h4>Intermediate - MPC</h4>
                                <span>SR Junior College | 2021 - 2023</span>
                                <p>Marks: 944</p>
                            </li>
                            <li>
                                <h4>Certifications</h4>
                                <span>Coursera & Hackathons</span>
                                <p>Fundamentals of Graphic Designing, Trinity Hack-2K26, IEEEXTRM Hackathon.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="skills-section">
                        <h3>My Skills</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-pill">
                                    {skill}
                                </div>
                            ))}
                        </div>

                        <h3 className="mt-2">Internships</h3>
                        <ul className="timeline">
                            <li>
                                <h4>Google Android Developer Intern</h4>
                                <span>Google | Virtual</span>
                                <p>Developed basic Android applications using Java/Kotlin and Android Studio. Learned UI design, app development concepts, and debugging.</p>
                            </li>
                            <li>
                                <h4>Juniper Networks Virtual Intern</h4>
                                <span>Juniper Networks | Virtual</span>
                                <p>Learned basics of routing, switching, and network security through practical tasks and simulations.</p>
                            </li>
                            <li>
                                <h4>Google AI/ML Virtual Intern</h4>
                                <span>Google | Virtual</span>
                                <p>Learned machine learning fundamentals, data preprocessing, and model evaluation using Python libraries.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;