import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../MyData/Index';
import HomeArticle from '../HomeArticle/HomeArticle';

const LatestArticles = () => {
	const blogData = blogs;
	return (
		<section className="my-5">
			<div className="container">
				<h3 className="my-5 text-center">Latest Articles</h3>
				<div data-aos="fade-up" data-aos-duration="1000">
					<div className="row row-cols-1 row-cols-md-3">
						{blogData.map((blog) => (
							<HomeArticle blog={blog} key={blog.number}></HomeArticle>
						))}
					</div>
				</div>
				<div className="text-center my-4">
					<Link to="/blog">
						<button className="btn see-more-btn">See more</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LatestArticles;
