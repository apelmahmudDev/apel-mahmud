import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
	const blogs = [
		{
			number: 1,
			title: 'Getting Started With React-router',
			description: `It’s a popular tool that works well with React Router.
            to get started with react-router. Firstly, you have to create a react app in your browser. then you can start with react-router. Don’t worry! I show you, how to connected routing in the react app.`,
			img: 'https://miro.medium.com/max/875/1*OKCuASS6btoN8CMkHDyeTQ.jpeg',
			author: 'Apel Mahmud',
			date: '23 Jul 2020',
			link: 'blank',
			color: 'bg-primary',
		},
		{
			number: 2,
			title: 'Use Firebase With React',
			description: `Today I will show you, How to start to react project with firebase as a beginner. it is very simple to do that. Firebase is a mobile and web application development platform. it is for backend development and google is its organizer. `,
			img: 'https://miro.medium.com/max/875/1*duT8VkGS-rbBI8Fgx8dNZw.jpeg',
			author: 'Apel Mahmud',
			date: '24 Jul 2020',
			link: 'blank',
			color: 'bg-success',
		},
	];

	return (
		<div className="container">
			<h1>This blog</h1>
			{blogs.map((blog) => (
				<Blog blog={blog} key={blog.number}></Blog>
			))}
		</div>
	);
};

export default Blogs;
