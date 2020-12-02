import React from 'react';
import { projects } from '../../MyData/Index';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
	const projectData = projects;
	window.scroll({
		top: 0,
	});
	return (
		<div className="container">
			<h3 className="my-4">Projects</h3>
			<div data-aos="fade-up" data-aos-duration="1000">
				<div className="row row-cols-1 row-cols-md-3">
					{projectData.map((project) => (
						<Project project={project} key={project.id}></Project>
					))}
				</div>
			</div>
			<div className="text-center my-4">
				<a
					href="https://github.com/apelmahmudDev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="btn see-more-btn">See more</button>
				</a>
			</div>
		</div>
	);
};

export default Projects;
