import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './Portfolios.css';

const Portfolios = () => {
	const projects = [
		{
			id: 1,
			name: 'Creative Agency',
			description:
				'A single page application with a dashboard. Where people find service for self skill development and can order any service.  Also, People can give feedback on the service.',
			applied: [
				'Bootstrap',
				'Javascript',
				'React.js',
				'React router',
				'Firebase',
				'Node.js',
				'Express.js',
				'mongoDB',
			],
			img: 'https://i.imgur.com/dof5IpM.png',
			website: 'https://creative-agency-de603.web.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/creative-agency',
		},
		{
			id: 2,
			name: 'Red Onion Restaurant',
			description:
				'A React.js based single page Red onion restaurant app. People can do order food from here and payment the food bill using an online payment system.',
			applied: [
				'Bootstrap',
				'Javascript',
				'React.js',
				'React router',
				'Firebase',
				'Node.js',
				'Express.js',
				'mongoDB',
			],
			img: 'https://i.imgur.com/961eT9Z.png',
			website: 'https://hot-onion-restaurant1.web.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/hot-onion-restaurant',
		},
		{
			id: 3,
			name: 'Volunteer Network',
			description:
				'Volunteer Network is a single-page app. Here you can find many volunteer options and if you want to be added as a volunteer can do it. It has also a dashboard with a volunteer list.',
			applied: [
				'Bootstrap',
				'Javascript',
				'React.js',
				'React router',
				'Firebase',
				'Node.js',
				'Express.js',
				'mongoDB',
			],
			img: 'https://i.imgur.com/97zEJFv.png',
			website: 'https://volunteer-network-3f698.web.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/volunteer-network',
		},
		{
			id: 4,
			name: 'Travel Guru',
			description:
				'Travel guru application using React javascript. In this here People can be booking any place with a fixed date pick. ',
			applied: [
				'Bootstrap',
				'Javascript',
				'React.js',
				'React router',
				'Material UI',
				'Firebase',
			],
			img: 'https://i.imgur.com/GIeeGDO.png',
			website: 'https://travel-guru0.web.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/travel-guru',
		},
		{
			id: 5,
			name: 'Social Buddy',
			description:
				'It is a simple and looking awesome single page application. Social Buddy has a lot of users. Every user has a post and comment.Post and comment loaded from API. ',
			applied: [
				'Bootstrap',
				'Javascript',
				'React.js',
				'React router',
				'Material UI',
			],
			img: 'https://i.imgur.com/9QJIPPY.png',
			website: 'https://social-buddyy.netlify.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/social-buddy',
		},
		{
			id: 6,
			name: 'Amazon Clone',
			description:
				'Awesome looking React application. It is the little same as amazon. Here you can add a product and put it in the shopping basket.',
			applied: ['HTML', 'CSS', 'Javascript', 'React.js'],
			img: 'https://i.imgur.com/yiKREb5.png',
			website: 'https://amazon-clone1.netlify.app/',
			gitHubLink: 'https://github.com/apelmahmudDev/amazon-clone',
		},
		{
			id: 7,
			name: 'Awesome Portfolio',
			description: 'A awesome looking portfolio',
			applied: ['HTML', 'CSS', 'Bootstrap'],
			img: 'https://i.imgur.com/tpOzCJu.png',
			website: 'https://apelmahmuddev.github.io/project2-Portfolio-/',
			gitHubLink: 'https://github.com/apelmahmudDev/project2-Portfolio-',
		},
		{
			id: 8,
			name: 'E-School',
			description: 'This is an online educational platform. This platform provides educational courses among students.',
			applied: ['HTML', 'CSS', 'Bootstrap'],
			img: 'https://i.imgur.com/KUVlQqV.png',
			website: 'https://apelmahmuddev.github.io/e-school/index.html',
			gitHubLink: 'https://github.com/apelmahmudDev/e-school',
		},
		{
			id: 9,
			name: 'Hot Gadgets',
			description: 'An E-commerce site. People can find phones, laptop,s and many varieties of products with help from this online e-commerce site.',
			applied: ['HTML', 'CSS', 'Bootstrap'],
			img: 'https://i.imgur.com/psABP4T.png',
			website: 'https://apelmahmuddev.github.io/hot-gadgets/',
			gitHubLink: 'https://github.com/apelmahmudDev/hot-gadgets',
		},
	];

	return (
		<div className="container">
			<h3 className="my-4">Portfolio</h3>
			<div data-aos="fade-up" data-aos-duration="1000">
				<div className="row row-cols-1 row-cols-md-3">
					{projects.map((project) => (
						<Portfolio project={project} key={project.id}></Portfolio>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolios;
