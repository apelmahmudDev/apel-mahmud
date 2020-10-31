import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Portfolios from '../Portfolios/Portfolios';

const Routes = () => {
	return (
		<>
            <Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolios} />
				<Route path="/blog" component={Blog} />
				<Route path="/contact" component={Contact} />
				<Route path="*">
					<h1>Not found the page</h1>
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
