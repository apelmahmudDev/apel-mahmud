import React from "react";
import { Link } from "react-router-dom";
import selfImage from "../../../images/apel05.png";
import "./Hero.css";
const HomeMain = () => {
	return (
		<div className="container">
			<div className="row d-flex align-items-center justify-content-center hero-height">
				<div className="col-md order-md-6 hero-right-section">
					<img src={selfImage} alt="" className="img-fluid w-75" />
				</div>
				<div className="col-md-6">
					<div className="hero-left-section">
						<div>
							<h3 className="brand-text-success font-weight-normal m-0 greet">
								Hello! I'm
							</h3>
							<h1 className="self-name font-weight-bold">Apel Mahmud</h1>
						</div>
						<div className="mt-4">
							<h3 className="brand-text-success developer-intro font-weight-bold">
								A Front End Developer
							</h3>
							<ul className="hero-list">
								<li>JavaScript Developer</li>
								<li>ReactJS Developer</li>
							</ul>
						</div>
						<div className="mt-4">
							<Link to="/contact">
								<button className="btn touch-btn active-touch-btn">
									Contact
								</button>
							</Link>
							<Link to="/about">
								<button className="btn touch-btn">About me</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeMain;
