import React from 'react';
import FeaturedProjects from '../../FeaturedProjects/FeaturedProjects';
import LatestArticles from '../LatestArticles/LatestArticles';
import ContactMain from '../ContactMain/ContactMain';
import Header from '../Header/Header';

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
