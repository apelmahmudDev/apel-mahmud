import React from 'react';
import LatestArticles from '../LatestArticles/LatestArticles';
import ContactMain from '../ContactMain/ContactMain';
import Header from '../Header/Header';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<FeaturedProjects></FeaturedProjects>
			<LatestArticles></LatestArticles>
			<ContactMain></ContactMain>
		</div>
	);
};

export default Home;
