import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { footerLinks } from '../../MyData/Index';

const Footer = () => {
	const footerLinksData = footerLinks;

	return (
		<footer className="footer-area mt-5">
			<div className="container text-right">
				<div className="row">
					<div className="col-md-6">
						<div className="footer-icon-container">
							{footerLinksData.map((link, index) => (
								<a href={link.link} target="_blank" rel="noopener noreferrer">
									<div className="icon-items">{link.icon}</div>
								</a>
							))}
						</div>
					</div>
					<div className="col-md-6 footer-right-section">
						<small>All rights reserved | {new Date().getFullYear()} | Created by me</small>
						<div className="scrolltop ml-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
							<FontAwesomeIcon className="faAngleUp" icon={faAngleUp} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
