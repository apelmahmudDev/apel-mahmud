import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Home from "../Home/Home/Home";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Projects = lazy(() => import("../Projects/Projects"));
const Blogs = lazy(() => import("../Blogs/Blogs"));

const Routes = () => {
	return (
		<>
			<Navbar></Navbar>
			<Suspense fallback={<LoadingSpinner />}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/projects" component={Projects} />
					<Route path="/blog" component={Blogs} />
					<Route path="/contact" component={Contact} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Suspense>
			<Footer></Footer>
		</>
	);
};

export default Routes;
