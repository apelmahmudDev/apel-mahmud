import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

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

export const skills = [
	{id: 1, title: 'My Skills', name: ['HTML','CSS','Bootstrap','JavaScript','React.js','Node.js','Express.js','MongoDB',]},
	{id: 1, title: 'Tools', name: ['GitHub','NPM','VS Code','Firebase','REST API','Heroku','Chrome developer tool',]},
];
