import React from 'react';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Portfolio = ({project}) => {
	const [isToggle, setIsToggle] = useState(false);

	// const handleToggle = () => {
	// 	setIsToggle(!isToggle);
	// }

	return (
		<div className="col mb-4">
			<div className="card h-100">
				<img src={project.img} className="card-img-top" alt="project" />
				<div className="card-body">
					<h5 className="card-title">{project.name}</h5>
					<p className="card-text">{project.description}</p>
				</div>
				<div className="card-footer">
					<div className="card-btn-container">
						<a href={project.gitHubLink} target="_blank" >
							<button className="btn card-btn">
								<FontAwesomeIcon className="card-btn-icon" icon={faGithub}/>
							</button>
						</a>
						<a href={project.website} target='_blank'>
							<button className="btn card-btn">
								<FontAwesomeIcon className="card-btn-icon" icon={faExternalLinkAlt}/>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
		// <button onClick={handleToggle} className="btn btn-success my-5">{isToggle ? 'See more work': 'See less'}</button> */}
	);
};

export default Portfolio;
