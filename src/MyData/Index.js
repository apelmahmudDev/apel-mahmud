import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
	faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faMapMarkerAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

//SOCIAL LINKS FOR ABOUT PAGE
export const socialLinks = [
	{
		id: 1,
		link: 'https://www.linkedin.com/in/apelmahmuddev/',
		icon: <FontAwesomeIcon className='social-icon' icon={faLinkedinIn} />,
	},
	{
		id: 2,
		link: 'https://github.com/apelmahmudDev',
		icon: <FontAwesomeIcon className='social-icon' icon={faGithub} />,
	},
	{
		id: 3,
		link: 'https://web.facebook.com/apelmahmudDev/',
		icon: <FontAwesomeIcon className='social-icon' icon={faFacebookF} />,
	},
];

//SKILL FOR ABOUT PAGE
export const skills = [
	{
		id: 1,
		title: 'My Skills Set',
		name: [
			'JavaScript',
			'ES-6',
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Bootstrap',
			'Material-Ui',
			'Tailwind CSS',
			'HTML5',
			'CSS3',
		],
	},
	{
		id: 2,
		title: 'I want to work with',
		name: ['JavaScript', 'React.js', 'Rest API'],
	},
	{
		id: 3,
		title: 'Familiar',
		name: ['TypeScript', 'Redux'],
	},
	{
		id: 4,
		title: 'Tools',
		name: [
			'GitHub',
			'NPM',
			'VS Code',
			'Firebase',
			'REST API',
			'Heroku',
			'Chrome developer tool',
		],
	},
];

//PROJECTS FOR Portfolios
export const projects = [
	{
		id: 1,
		name: 'Creative Agency',
		description:
			'A full-stack MERN application with a dashboard. Where people find service for self skill development and can order any service. Also, People can give feedback on the service.',
		technology: ['React.js', 'Node.js', 'Express.js', 'mongoDB', 'Heroku'],
		img: 'https://i.imgur.com/L0QgRfN.png',
		website: 'https://creative-agency-de603.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/creative-agency',
	},
	{
		id: 245682,
		name: 'Delighted Pics',
		description:
			'A full-stack web application with a dashboard. Where people find various Photography services and can get hire photographers. Also have a login system with email, password, and google.',
		technology: ['React.js', 'Tailwind CSS', 'Firebase', 'Heroku'],
		img: 'https://i.imgur.com/QPwT1kR.png',
		website: 'https://delighted-pics.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/delighted-pics',
	},
	{
		id: 2,
		name: 'Doctor Chamber',
		description:
			'Doctor chamber is a full-stack MERN application website. You can pick any date for an appointment. Also, you can find your booking appointment on the dashboard.',
		technology: ['React.js', 'React Router', 'Firebase', 'Heroku'],
		img: 'https://i.imgur.com/Q9mKlMv.jpg',
		website: 'https://doctor-portall.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/doctor-chamber',
	},
	{
		id: 3,
		name: 'Volunteer Network',
		description:
			'Volunteer Network is a MERN stack app. Here you can find many volunteer options and if you want to be added as a volunteer can do it. It has also a dashboard with a volunteer list.',
		technology: [
			'React.js',
			'React router',
			'Firebase',
			'Node.js',
			'Express.js',
			'mongoDB',
		],
		img: 'https://i.imgur.com/L6gSsvm.jpg',
		website: 'https://volunteer-network-3f698.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/volunteer-network',
	},
	{
		id: 4,
		name: 'Travel Guru',
		description:
			'Travel guru application using React javascript. In this here People can be booking any place with a fixed date pick. ',
		technology: ['React.js', 'React router', 'Firebase'],
		img: 'https://i.imgur.com/uOOZbgW.jpg',
		website: 'https://travel-guru0.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/travel-guru',
	},
	{
		id: 5,
		name: 'Red Onion Restaurant',
		description:
			'A React.js based single page Red onion restaurant app. People can do order food from here and payment the food bill using an online payment system.',
		technology: ['React.js', 'React router', 'Firebase', 'Heroku'],
		img: 'https://i.imgur.com/cVFAb9b.png',
		website: 'https://hot-onion-restaurant1.web.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/hot-onion-restaurant',
	},
	{
		id: 6,
		name: 'Social Buddy',
		description:
			'It is a simple and looking awesome single page application. Social Buddy has a lot of users. Every user has a post and comment.Post and comment loaded from API. ',
		technology: ['Javascript', 'React.js', 'React router', 'Material UI'],
		img: 'https://i.imgur.com/spUUuXx.png',
		website: 'https://social-buddyy.netlify.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/social-buddy',
	},
	{
		id: 7,
		name: 'Amazon Clone',
		description:
			'Awesome looking React application. It is the little same as amazon. Here you can add a product and put it in the shopping basket.',
		technology: ['HTML', 'CSS', 'Javascript', 'React.js'],
		img: 'https://i.imgur.com/DKymgqS.jpg',
		website: 'https://amazon-clone1.netlify.app/',
		gitHubLink: 'https://github.com/apelmahmudDev/amazon-clone',
	},
	{
		id: 8,
		name: 'Hungry Monster',
		description:
			'A lot of meals collected from meal API. A user can search meal by ingredients for making delicious food.',
		technology: ['JavaScript', 'HTML5', 'CSS3'],
		img: 'https://github.com/apelmahmudDev/hungry-monster/raw/master/images/hungry-monster.PNG?raw=true',
		website: 'https://apelmahmuddev.github.io/hungry-monster/',
		gitHubLink: 'https://github.com/apelmahmudDev/hungry-monster',
	},
	{
		id: 9,
		name: 'Pin Matcher',
		description:
			'A pin matcher application. You can generate a pin and check to match. If the pin does not match it will display a message.',
		technology: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
		img: 'https://i.imgur.com/4uCCMrd.png',
		website: 'https://apelmahmuddev.github.io/pin-matcher/',
		gitHubLink: 'https://github.com/apelmahmudDev/pin-matcher',
	},
	{
		id: 10,
		name: 'Nuha Fashion',
		description:
			'A static e-commerce website with an awesome carousel slider and Converted from Figma to HTML template',
		technology: ['HTML', 'CSS', 'Bootstrap'],
		img: 'https://i.imgur.com/DfWz07r.png',
		website: 'https://apelmahmuddev.github.io/nuha-fashion/',
		gitHubLink: 'https://github.com/apelmahmudDev/nuha-fashion',
	},
	{
		id: 11,
		name: 'Hot Gadgets',
		description:
			'An E-commerce site. People can find phones, laptop,s and many varieties of products with help from this online e-commerce site.',
		technology: ['HTML', 'CSS', 'Bootstrap'],
		img: 'https://i.imgur.com/n8qtwTk.png',
		website: 'https://apelmahmuddev.github.io/hot-gadgets/',
		gitHubLink: 'https://github.com/apelmahmudDev/hot-gadgets',
	},
];

//BLOGS FOR BLOG PAGE
export const blogs = [
	{
		number: 1,
		title: 'ইভেন্ট বাবলিং এন্ড ইভেন্ট ডিলিগেশন',
		description: `বর্তমান মডার্ন ওয়েব অ্যাপ্লিকেশনগুলোতে ইভেন্ট হ্যান্ডেলিং একটা গুরুত্বপূর্ণ অংশ। ইভেন্ট হ্যান্ডেলিং বিষয়টা ভালোভাবে জানা থাকলে আমরা যারা ডেভেলপাররা ব্রাউজারে জাভাস্ক্রিপ্ট নিয়ে কাজ করি, তারা একটু এক্সট্রা বেনিফিট পাই`,
		technology: ['DOM'],
		img: 'https://miro.medium.com/max/1250/1*FN5TBVBLG4degDPK-3KKHA.png',
		author: 'Apel Mahmud',
		date: '15 Aug 2021',
		link: 'https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/%E0%A6%87%E0%A6%AD%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%AC%E0%A6%BE%E0%A6%AC%E0%A6%B2%E0%A6%BF%E0%A6%82-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%87%E0%A6%AD%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%A1%E0%A6%BF%E0%A6%B2%E0%A6%BF%E0%A6%97%E0%A7%87%E0%A6%B6%E0%A6%A8-e481ba971997',
		color: 'bg-warning',
	},
	{
		number: 2,
		title: 'Getting Started With React-router',
		description: `It’s a popular tool that works well with React Router.
        to get started with react-router. Firstly, you have to create a react app in your browser. then you can start with react-router. Don’t worry! I show you, how to connected routing in the react app.`,
		technology: ['React', 'React router'],
		img: 'https://miro.medium.com/max/875/1*OKCuASS6btoN8CMkHDyeTQ.jpeg',
		author: 'Apel Mahmud',
		date: '23 Jul 2020',
		link: 'https://medium.com/@apelmahmudDev/getting-started-with-react-router-cba5fff59b0c?sk=c22aa2fbc9f9109b546b798594a06d66',
		color: 'bg-primary',
	},
	{
		number: 3,
		title: 'JavaScript Interview Questions',
		description: `JavaScript is both server-side and client-side scripting language. It also now an object-based programming language.`,
		technology: ['JavaScript'],
		img: 'https://miro.medium.com/max/875/1*sOHJTIrfdleUF6wDg9BMRw.png',
		author: 'Apel Mahmud',
		date: '13 Dec 2020',
		link: 'https://apelmahmuddev.medium.com/javascript-interview-questions-9e587871f35c',
		color: 'bg-warning',
	},
	{
		number: 4,
		title: 'HTML interview Questions',
		description: `HTML stands Hypertext Markup Language which is of www (World Wide Web) primary language. Html used to create a web page and it rendered content on the browser.`,
		technology: ['HTML'],
		img: 'https://miro.medium.com/max/875/1*65OGwS-8ZJL3FZBbWCB9Pg.png',
		author: 'Apel Mahmud',
		date: '05 Dec 2020',
		link: 'https://apelmahmuddev.medium.com/html-interview-questions-d494f769746c',
		color: 'bg-danger',
	},
	{
		number: 5,
		title: 'Use Firebase With React',
		description: `Today I will show you, How to start to react project with firebase as a beginner. it is very simple to do that. Firebase is a mobile and web application development platform. it is for backend development and google is its organizer. `,
		technology: ['React', 'firebase'],
		img: 'https://miro.medium.com/max/875/1*duT8VkGS-rbBI8Fgx8dNZw.jpeg',
		author: 'Apel Mahmud',
		date: '24 Jul 2020',
		link: 'https://medium.com/@apelmahmudDev/use-firebase-with-react-983eca2a162b?sk=4ff1644f524f7c924143cec5698d5839',
		color: 'bg-success',
	},
];

//CONTACT INFORMATION FOR CONTACT
export const cardInfo = [
	{
		id: 1,
		title: 'Gobindagonj, Gaibandha, Bangladesh',
		role: 'Home address',
		icon: <FontAwesomeIcon className='contact-icon' icon={faMapMarkerAlt} />,
	},
	{
		id: 2,
		title: 'apelmahmud.dev@gmail.com',
		role: 'Mail address',
		icon: <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />,
	},
	{
		id: 3,
		title: '+880 1739-801-364',
		role: 'Personal Phone',
		icon: <FontAwesomeIcon className='contact-icon' icon={faPhoneAlt} />,
	},
];

//SOCIAL LINKS FOR FOOTER
export const footerLinks = [
	{
		id: 1,
		link: 'https://www.linkedin.com/in/apelmahmuddev/',
		icon: <FontAwesomeIcon className='footer-icon' icon={faLinkedinIn} />,
	},
	{
		id: 2,
		link: 'https://github.com/apelmahmudDev',
		icon: <FontAwesomeIcon className='footer-icon' icon={faGithub} />,
	},
	{
		id: 3,
		link: 'https://web.facebook.com/apelmahmudDev/',
		icon: <FontAwesomeIcon className='footer-icon' icon={faFacebookF} />,
	},
	{
		id: 4,
		link: 'https://medium.com/@apelmahmudDev',
		icon: <FontAwesomeIcon className='footer-icon' icon={faMediumM} />,
	},
];
