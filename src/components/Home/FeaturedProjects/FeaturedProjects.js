import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../MyData/Index";
import Featured from "../Featured/Featured";

const FeaturedProjects = () => {
	const projectData = projects.slice(0, 3);

	return (
		<section className="my-5">
			{/* SECTION TITLE  START*/}
			<div className="container my-5">
				<div className="row d-flex flex-wrap">
					<div className="col-md-8">
						<div className="section-title">
							<h3>
								Featured <span className="brand-text-success">Projects</span>
							</h3>
							<div className="text-right">
								<Link to="/projects" className="link-details">
									<button className="btn btn-sm btn-outline-success brand-bg-primary">
										All Projects
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SECTION TITLE  START*/}
			<div className="container">
				<div>
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
						{projectData.map((project) => (
							<Featured project={project} key={project.id}></Featured>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
