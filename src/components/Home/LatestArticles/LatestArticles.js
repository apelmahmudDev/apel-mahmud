import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../../MyData/Index";
import HomeArticle from "../HomeArticle/HomeArticle";

const LatestArticles = () => {
	const blogData = blogs.slice(0, 3);
	return (
		<section className="my-5">
			{/* SECTION TITLE  START*/}
			<div className="container my-5">
				<div className="row d-flex flex-wrap">
					<div className="col-md-8">
						<div className="section-title">
							<h3>
								Latest <span className="brand-text-success">Articles</span>
							</h3>
							<div className="text-right">
								<Link to="/blog" className="link-details">
									<button className="btn btn-sm btn-outline-success brand-bg-primary">
										All articles
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SECTION TITLE  START*/}
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
					{blogData.map((blog) => (
						<HomeArticle blog={blog} key={blog.number}></HomeArticle>
					))}
				</div>
			</div>
		</section>
	);
};

export default LatestArticles;
