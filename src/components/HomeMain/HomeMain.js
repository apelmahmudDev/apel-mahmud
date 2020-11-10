import React from 'react';
import './HomeMain.css';
import selfImage from '../../images/apel05.png';
import { Link } from 'react-router-dom';
const HomeMain = () => {
	return (
		<div className="container">
			<div className="row d-flex align-items-center justify-content-center home-height">
				<div className="col-md-6">
					<div
						className="home-left-section"
						data-aos="fade-right"
						data-aos-duration="1000"
					>
						<div>
							<h3 className="brand-text-success font-weight-normal m-0 greet">
								Hello! I'm
							</h3>
							<h1 className="self-name font-weight-bold">Apel Mahmud</h1>
						</div>
						<div className="mt-4">
							<h3 className="brand-text-success developer-intro">
								A Front End Developer
							</h3>
							<ul className="home-list">
								<li>Web Devloper</li>
							</ul>
						</div>
						<div className="mt-4">
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
				</div>
				<div className="col-md-6 home-right-section">
					<div data-aos="fade-left" data-aos-duration="1000">
						<img src={selfImage} alt="" className="img-fluid w-75" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeMain;
