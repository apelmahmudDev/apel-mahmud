import React from 'react';
import './About.css';
import selfImage from '../../images/apel05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"


const About = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="introduce-container">
                        <img src={selfImage} alt="" className="w-50"/>
                        <div className="page-title">
                            <div className="line-dash mr-2"></div>
                            <h6>Hello, I'm</h6>
                        </div>
                        <h2 className="text-uppercase">Apel Mahmud</h2>
                        <div className="page-title">
                            <h6>A Frontend Developer</h6>
                            <div className="line-dash ml-2"></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis inventore esse voluptas nulla iusto nesciunt ut non sit, mollitia quibusdam, sequi quae beatae vitae dolorem doloribus suscipit commodi. Ex.</p>
                        <div className="social-link">
                            <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="social-icon likedin" icon={faLinkedin} />
                            <FontAwesomeIcon className="social-icon" icon={faGithubSquare} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skills-part-one">
                        <h4>My Skills</h4>
                        <div className="line-dash"></div>
                        <div className="technology mt-3">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>GitHub</span>
                            <span>NPM</span>
                            <span>VS Code</span>
                            <span>Firebase</span>
                            <span>REST API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;