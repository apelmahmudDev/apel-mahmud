import React from 'react';
import { projects } from '../../MyData/Index';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolios.css';

const Portfolios = () => {
	const projectData = projects;
	window.scroll({
		top: 0,
	});
	return (
		<div className="container">
			<h3 className="my-4">Portfolio</h3>
			<div data-aos="fade-up" data-aos-duration="1000">
				<div className="row row-cols-1 row-cols-md-3">
					{projectData.map((project) => (
						<Portfolio project={project} key={project.id}></Portfolio>
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

export default Portfolios;
