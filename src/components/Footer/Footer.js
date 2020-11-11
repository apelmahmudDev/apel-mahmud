import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import {
	faLinkedinIn,
	faGithub,
	faFacebookF,
    faMediumM,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="footer-area mt-5">
			<div className="container text-right">
				<div className="row">
					<div className="col-md-6">
						<div className="footer-icon-container">
                            <a href="https://www.linkedin.com/in/apelmahmuddev/" target="_blank" rel="noopener noreferrer"> 
                                <div className="icon-items">
                                    <FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
                                </div>
                            </a>
                            <a href="https://github.com/apelmahmudDev" target="_blank" rel="noopener noreferrer"> 
                                <div className="icon-items">
                                    <FontAwesomeIcon className="footer-icon" icon={faGithub} />
                                </div>
                            </a>
                            <a href="https://web.facebook.com/apelmahmudDev/" target="_blank" rel="noopener noreferrer"> 
                                <div className="icon-items">
                                    <FontAwesomeIcon className="footer-icon" icon={faFacebookF} />
                                </div>
                            </a>
                            <a href="https://web.facebook.com/apelmahmudDev/" target="_blank" rel="noopener noreferrer"> 
                                <div className="icon-items">
                                    <FontAwesomeIcon className="footer-icon" icon={faMediumM} />
                                </div>
                            </a>
                        </div>
					</div>
					<div className="col-md-6">
						<small>All rights reserved | {new Date().getFullYear()} | Created by me</small>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
