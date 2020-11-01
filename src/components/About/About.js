import React from 'react';
import './About.css';
import selfImage from '../../images/apel05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {
    const intros = [
        {
            img: selfImage,
            name: 'Apel Mahmud',
            title: 'A Frontend Developer',
            greeting: `Hello, I'm`,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae eos modi odit in neque temporibus obcaecati repellat sint! Eligendi dicta sed mollitia repellat fugiat harum laborum eaque assumenda eius animi?',
            icons: [faLinkedinIn, faGithub, faFacebookF],
            linkedin: 'blank',
            github: 'blank',
            facebook: 'blank',
            linkedinIcon: faLinkedinIn,
            githubIcon: 'blank',
            facebookIcon: 'blank',
        }
    ]
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="introduce-container">
						<img src={selfImage} alt="" className="w-50" />
						<div className="page-title">
							<div className="line-dash mr-2"></div>
							<h6>Hello, I'm</h6>
						</div>
						<h2 className="font-weight-bold">Apel Mahmud</h2>
						<div className="page-title">
							<h6>A Frontend Developer</h6>
							<div className="line-dash ml-2"></div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
							omnis inventore esse voluptas nulla iusto nesciunt ut non sit,
							mollitia quibusdam, sequi quae beatae vitae dolorem doloribus
							suscipit commodi. Ex.
						</p>
						<div className="social-link">
							<Link to="/">
								<div className="social-item">
									<FontAwesomeIcon
										className="social-icon"
										icon={faLinkedinIn}
									/>
								</div>
							</Link>
							<Link to="/">
								<div className="social-item">
									<FontAwesomeIcon
										className="social-icon likedin"
										icon={faGithub}
									/>
								</div>
							</Link>
							<Link to="/">
								<div className="social-item">
									<FontAwesomeIcon className="social-icon" icon={faFacebookF} />
								</div>
							</Link>
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
