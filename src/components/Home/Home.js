import React from 'react';
import './Home.css';
import HomeMain from '../HomeMain/HomeMain';
import ParticlesShow from '../ParticlesShow/ParticlesShow';

const Home = () => {
	return (
		<div>
			<div className="particle-background">
				<ParticlesShow></ParticlesShow>
			</div>
			<div className="particle-home">
				<HomeMain></HomeMain>
			</div>
		</div>
	);
};

export default Home;
