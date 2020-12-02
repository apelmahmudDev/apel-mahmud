import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({project}) => {
	return (
		<div className="col mb-4">
			<div className="card h-100 project-card">
				<img src={project.img} className="card-img-top" alt="project" />
				<div className="card-body">
					<h5 className="card-title">{project.name}</h5>
					<p className="card-text">{project.description}</p>
					<div className="card-lang">
						{project.technology.map((lang, index) => <span key={index}>{lang}</span>)}
					</div>
				</div>
				<div className="card-footer">
					<div className="card-btn-container">
						<a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
							<button className="btn card-btn">
								<FontAwesomeIcon className="card-btn-icon" icon={faGithub}/>
							</button>
						</a>
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<button className="btn card-btn">
								<FontAwesomeIcon className="card-btn-icon" icon={faExternalLinkAlt}/>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
