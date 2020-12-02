import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const ContactMain = () => {
	return (
		<section>
			<div className="container">
				<div className="text-center my-5">
					<p className="brand-text-success">What's Next?</p>
					<Typical
						steps={['Get In Touch...', 1000]}
						loop={Infinity}
						wrapper="h1"
						className="contact-title"
					/>
					<p>
						If I can be of assistance, please do not hesitate to contact me
						<br></br> And I will give you my best.
					</p>
					<div className="text-center my-4">
						<Link to="/contact">
							<button className="btn see-more-btn">Say Hello</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMain;
