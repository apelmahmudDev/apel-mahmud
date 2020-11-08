import React from 'react';
import './About.css';
import selfImage from '../../images/apel05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
	return (
		<div className="container about-wrapper mt-4 ">
			<div className="row">
				<div className="col-md-6">
					<div className="">
						<div className="intro-img intro-img">
							<img src={selfImage} alt="" className="w-50" />
						</div>
						<div className="my-4">
							<h6 className="brand-text-success">Hello! I'm</h6>
							<h2 className="font-weight-bold">Apel Mahmud</h2>
							<h6 className="brand-text-success">A Frontend Developer</h6>
						</div>
						<p>
							I work fluently with HTML5, CSS3, Bootstrap, JavaScript, and ES6.
							I use react.js to develop the front end part of the website and
							use node.js, express.js and MongoDB to Backend.
						</p>
						<div className="social-link mt-4">
							<a href="https://www.linkedin.com/in/apelmahmuddev/" target="_blank" rel="noopener noreferrer">
								<div className="social-item">
									<FontAwesomeIcon
										className="social-icon"
										icon={faLinkedinIn}
									/>
								</div>
							</a>
							<a href="https://github.com/apelmahmudDev" target="_blank" rel="noopener noreferrer">
								<div className="social-item">
									<FontAwesomeIcon
										className="social-icon likedin"
										icon={faGithub}
									/>
								</div>
							</a>
							<a href="https://web.facebook.com/apelmahmudDev/" target="_blank" rel="noopener noreferrer">
								<div className="social-item">
									<FontAwesomeIcon className="social-icon" icon={faFacebookF} />
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="skills-part-container">
						<h4>My Skills</h4>
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
