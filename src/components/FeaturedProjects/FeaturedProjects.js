import React from 'react';
import { projects } from '../../MyData/Index';
import Featured from '../Featured/Featured';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
	const projectData = projects.slice(0, 3);

	return (
		<section className="my-5">
			<div className="container">
				<h3 className="my-5 text-center">Featured Projects</h3>
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row row-cols-1 row-cols-md-3">
						{projectData.map((project) => (
							<Featured project={project} key={project.id}></Featured>
						))}
					</div>
				</div>
				<div className="text-center my-4">
					<Link to="/portfolio">
						<button className="btn see-more-btn">See more</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
