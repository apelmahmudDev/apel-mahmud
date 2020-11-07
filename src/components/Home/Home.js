import React from 'react';
import HomeMain from '../HomeMain/HomeMain';
import ParticlesShow from '../ParticlesShow/ParticlesShow';

const Home = () => {
	return (
		<main>
			<div style={{ position: 'relative' }}>
				<ParticlesShow></ParticlesShow>
			</div>
			<div>
				<HomeMain></HomeMain>
			</div>
		</main>
	);
};

export default Home;
