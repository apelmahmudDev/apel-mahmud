import React, { Suspense, lazy } from "react";
import ContactMain from "../ContactMain/ContactMain";
import Header from "../Header/Header";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
const FeaturedProjects = lazy(() =>
	import("../FeaturedProjects/FeaturedProjects")
);
const LatestArticles = lazy(() => import("../LatestArticles/LatestArticles"));

const Home = () => {
	return (
		<>
			<Header></Header>
			<Suspense fallback={<LoadingSpinner />}>
				<FeaturedProjects></FeaturedProjects>
				<LatestArticles></LatestArticles>
			</Suspense>
			<ContactMain></ContactMain>
		</>
	);
};

export default Home;
