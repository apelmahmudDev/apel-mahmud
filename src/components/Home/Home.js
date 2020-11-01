import React from 'react';
import './Home.css';
import selfImage from '../../images/apel05.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<div className="row d-flex align-items-center justify-content-center home-height">
				<div className="col-md-6">
					<h3 className="brand-text-success font-weight-normal m-0">
						Hello I'm
					</h3>
					<h1 className="self-name font-weight-bold">Apel Mahmud</h1>
					<h3 className="brand-text-success">A Front End Developer</h3>
					<ul className="home-list">
						<li>Web Devloper</li>
					</ul>
					<div className="mt-3">
						<Link to="/contact">
							<button className="btn touch-btn active-touch-btn">
								Touch me
							</button>
						</Link>
						<Link to="/about">
							<button className="btn touch-btn">About me</button>
						</Link>
					</div>
				</div>
				<div className="col-md-6 text-right">
					<img src={selfImage} alt="" className="image-fluid w-75" />
				</div>
			</div>
		</div>
	);
};

export default Home;
