import React from 'react';
import { blogs } from '../../MyData/Index';
import Blog from '../Blog/Blog';

const Blogs = () => {
	window.scroll({
		top: 0,
	});

	const blogData = blogs;
	
	return (
		<div className="container">
			<h3 className="my-4">This blog</h3>
			{blogData.map((blog) => (
				<Blog blog={blog} key={blog.number}></Blog>
			))}
		</div>
	);
};

export default Blogs;
