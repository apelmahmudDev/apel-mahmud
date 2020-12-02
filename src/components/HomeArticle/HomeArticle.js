import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserCircle,
	faCalendarAlt,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

const HomeArticle = ({ blog }) => {
	return (
		<div className="col mb-4">
			<div className="card h-100 portfolio-card">
				<img src={blog.img} className="card-img-top" alt="blog" />
				<div className="card-body">
					<h5 className="card-title">{blog.title}</h5>
					<p className="card-text">{blog.description}</p>
					<div className="card-lang">
						{blog.technology.map((lang, index) => (
							<span key={index}>{lang}</span>
						))}
					</div>
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
			</div>
		</div>
	);
};

export default HomeArticle;
