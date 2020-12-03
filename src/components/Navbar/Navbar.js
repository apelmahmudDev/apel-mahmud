import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';
import Headroom from 'react-headroom';

const Navbar = () => {
	return (
		<Headroom>
			<nav className="navbar navbar-expand-lg navbar-dark bg-default shadow">
				<div className="container">
					<NavLink className="navbar-brand" to="/">
						<img src={logo} alt="" className="w-50 img-fluid" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ml-auto">
							<NavLink className="nav-link active" to="/home">
								Home
							</NavLink>
							<NavLink className="nav-link" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link" to="/projects">
								Projects
							</NavLink>
							<NavLink className="nav-link" to="/blog">
								Blog
							</NavLink>
							<NavLink className="nav-link" to="/contact">
								Let's Talk
							</NavLink>
							<a
								href="https://drive.google.com/u/0/uc?id=1aYmqC8TTrVc6FW1zT3Khj8KzloTlo3ZZ&export=download"
								className="nav-link resume"
							>
								Resume
							</a>
						</div>
					</div>
				</div>
			</nav>
		</Headroom>
	);
};

export default Navbar;
