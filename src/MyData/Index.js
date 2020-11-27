import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

//SOCIAL LINKS FOR ABOUT PAGE
export const socialLinks = [
	{
		id: 1,
		link: 'https://www.linkedin.com/in/apelmahmuddev/',
		icon: <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />,
	},
	{
		id: 2,
		link: 'https://github.com/apelmahmudDev',
		icon: <FontAwesomeIcon className="social-icon" icon={faGithub} />,
	},
	{
		id: 3,
		link: 'https://web.facebook.com/apelmahmudDev/',
		icon: <FontAwesomeIcon className="social-icon" icon={faFacebookF} />,
	},
];

//SKILL FOR ABOUT PAGE
export const skills = [
	{id: 1, title: 'My Skills', name: ['HTML','CSS','Bootstrap','JavaScript','React.js','Node.js','Express.js','MongoDB',]},
	{id: 1, title: 'Tools', name: ['GitHub','NPM','VS Code','Firebase','REST API','Heroku','Chrome developer tool',]},
];

//PROJECTS FOR Portfolios
export const projects = [
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
        name: 'Doctor Chamber',
        description:
            'Doctor chamber is a full-stack application website. You can pick any date for an appointment. Also, you can find your booking appointment on the dashboard.',
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
        img: 'https://i.imgur.com/VNlphLs.png',
        website: 'https://doctor-portall.web.app/',
        gitHubLink: 'https://github.com/apelmahmudDev/doctor-chamber',
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
        id: 5,
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
        id: 6,
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
        id: 7,
        name: 'Amazon Clone',
        description:
            'Awesome looking React application. It is the little same as amazon. Here you can add a product and put it in the shopping basket.',
        applied: ['HTML', 'CSS', 'Javascript', 'React.js'],
        img: 'https://i.imgur.com/yiKREb5.png',
        website: 'https://amazon-clone1.netlify.app/',
        gitHubLink: 'https://github.com/apelmahmudDev/amazon-clone',
    },
    {
        id: 8,
        name: 'Awesome Portfolio',
        description: 'A awesome looking portfolio',
        applied: ['HTML', 'CSS', 'Bootstrap'],
        img: 'https://i.imgur.com/tpOzCJu.png',
        website: 'https://apelmahmuddev.github.io/project2-Portfolio-/',
        gitHubLink: 'https://github.com/apelmahmudDev/project2-Portfolio-',
    },
    {
        id: 9,
        name: 'E-School',
        description:
            'This is an online educational platform. This platform provides educational courses among students.',
        applied: ['HTML', 'CSS', 'Bootstrap'],
        img: 'https://i.imgur.com/KUVlQqV.png',
        website: 'https://apelmahmuddev.github.io/e-school/index.html',
        gitHubLink: 'https://github.com/apelmahmudDev/e-school',
    },
    {
        id: 10,
        name: 'Hot Gadgets',
        description:
            'An E-commerce site. People can find phones, laptop,s and many varieties of products with help from this online e-commerce site.',
        applied: ['HTML', 'CSS', 'Bootstrap'],
        img: 'https://i.imgur.com/psABP4T.png',
        website: 'https://apelmahmuddev.github.io/hot-gadgets/',
        gitHubLink: 'https://github.com/apelmahmudDev/hot-gadgets',
    },
    
];


//BLOGS FOR BLOG PAGE
export const blogs = [
    {
        number: 1,
        title: 'Getting Started With React-router',
        description: `It’s a popular tool that works well with React Router.
        to get started with react-router. Firstly, you have to create a react app in your browser. then you can start with react-router. Don’t worry! I show you, how to connected routing in the react app.`,
        img: 'https://miro.medium.com/max/875/1*OKCuASS6btoN8CMkHDyeTQ.jpeg',
        author: 'Apel Mahmud',
        date: '23 Jul 2020',
        link: 'https://medium.com/@apelmahmudDev/getting-started-with-react-router-cba5fff59b0c?sk=c22aa2fbc9f9109b546b798594a06d66',
        color: 'bg-primary',
    },
    {
        number: 2,
        title: 'Use Firebase With React',
        description: `Today I will show you, How to start to react project with firebase as a beginner. it is very simple to do that. Firebase is a mobile and web application development platform. it is for backend development and google is its organizer. `,
        img: 'https://miro.medium.com/max/875/1*duT8VkGS-rbBI8Fgx8dNZw.jpeg',
        author: 'Apel Mahmud',
        date: '24 Jul 2020',
        link: 'https://medium.com/@apelmahmudDev/use-firebase-with-react-983eca2a162b?sk=4ff1644f524f7c924143cec5698d5839',
        color: 'bg-success',
    },
];