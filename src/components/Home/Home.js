import React from 'react';
import './Home.css';
import HomeMain from '../HomeMain/HomeMain';
import ParticlesShow from '../ParticlesShow/ParticlesShow';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import LatestArticles from '../LatestArticles/LatestArticles';
import ContactMain from '../ContactMain/ContactMain';

const Home = () => {
	return (
		<div>
			<div className="particle-background">
				<ParticlesShow></ParticlesShow>
			</div>
			<div className="particle-home">
				<HomeMain></HomeMain>
			</div>
				<FeaturedProjects></FeaturedProjects>
				<LatestArticles></LatestArticles>
				<ContactMain></ContactMain>
		</div>
	);
};

export default Home;
