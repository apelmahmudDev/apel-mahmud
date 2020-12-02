import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCircle,
	faCalendarAlt,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

const Blog = ({ blog }) => {
	window.scroll({
		top: 0,
	});
	return (
		<div className="card mb-3 blog-card">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={blog.img} className="card-img" alt="" height="100%" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title text-warning">{blog.title}</h5>
						<p>{blog.description}</p>
					</div>
					<div className="d-flex flex-wrap justify-content-between card-footer">
						<p>
							<FontAwesomeIcon icon={faUserCircle} />
							<span> By {blog.author}</span>
						</p>
						<p>
							<FontAwesomeIcon icon={faCalendarAlt} />
							<span> {blog.date}</span>
						</p>
						<a
							href={blog.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-light"
						>
							<span>Read More </span>
							<FontAwesomeIcon icon={faPlus} />
						</a>
					</div>
					<div className={`blog-number ${blog.color}`}>
						<h2 className="mt-4 ml-2">0{blog.number}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
