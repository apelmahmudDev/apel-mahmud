import React from 'react';
import Hero from '../Hero/Hero';
import ParticlesShow from '../ParticlesShow/ParticlesShow';

const Header = () => {
	return (
		<header>
			<div className="particle-background">
				<ParticlesShow></ParticlesShow>
			</div>
			<div className="particle-home">
				<Hero></Hero>
			</div>
		</header>
	);
};

export default Header;
