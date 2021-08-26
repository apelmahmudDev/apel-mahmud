import React from 'react';
import Typical from 'react-typical';
import selfImage from '../../images/apel05.png';
import { skills, socialLinks } from '../../MyData/Index';
import './About.css';

const About = () => {
	window.scroll({
		top: 0,
	});

	const socialData = socialLinks;
	const skikllData = skills;

	return (
		<div className='container about-wrapper'>
			<div className='row'>
				<div className='col-md-6'>
					<div className='intro-img intro-img mt-4'>
						<img src={selfImage} alt='' className='w-50' />
					</div>
					<div className='my-4'>
						<h6 className='brand-text-success'>Hello! I'm</h6>
						<h2 className='font-weight-bold'>Apel Mahmud</h2>
						<h6 className='brand-text-success'>A Frontend Developer</h6>
					</div>
					<div className='my-3'>
						<Typical
							steps={[
								'I Provide',
								1000,
								'I Provide Responsive Design',
								500,
								'I Provide Clean code',
								1000,
								'I Provide Attractive animation.',
								500,
							]}
							loop={Infinity}
							wrapper='h6'
						/>
					</div>
					<p>
						I work fluently with HTML5, CSS3, Bootstrap, JavaScript, and ES6. I
						use react.js to develop the front end part of the website and use
						node.js, express.js and MongoDB for to Backend.
					</p>
					<div className='social-link mt-4'>
						{socialData.map((link, index) => (
							<a
								href={link.link}
								target='_blank'
								rel='noopener noreferrer'
								key={index}
							>
								<div className='social-item'>{link.icon}</div>
							</a>
						))}
					</div>
				</div>
				<div className='col-md-6'>
					<div className='skills-part-container'>
						{skikllData.map((skill, index) => (
							<div key={index}>
								<h5 className='mt-5'>{skill.title}</h5>
								<div className='technology mt-3'>
									{skill.name.map((name, index) => (
										<span key={index}>{name}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
