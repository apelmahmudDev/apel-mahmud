import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Contact from '../Contact/Contact';
import Portfolios from '../Portfolios/Portfolios';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';

const Routes = () => {
	return (
		<>
            <Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolios} />
				<Route path="/blog" component={Blogs} />
				<Route path="/contact" component={Contact} />
				<Route path="*">
					<h1>Not found the page</h1>
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
