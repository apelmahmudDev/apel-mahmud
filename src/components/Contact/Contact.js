import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faMapMarkerAlt,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className="container">
			<div className="text-center my-5">
				<Typical
					steps={[
						'Let’s Talk',
						1000,
					]}
					loop={Infinity}
                    wrapper="h1"
                    className="contact-title"
				/>
			</div>
			<div className="row" style={{ height: '100vh' }}>
				<div className="col-md-7">
					<div className="form-area">
						<h2 className="text-center">Get In Touch</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-group">
								<input
									name="name"
									className="form-control"
									ref={register({ required: true })}
									placeholder="Name"
								/>
								{errors.name && (
									<span className="brand-text-secondary">
										Please enter your name
									</span>
								)}
							</div>

							<div className="form-group">
								<input
									type="email"
									name="email"
									className="form-control"
									ref={register({ required: true })}
									placeholder="Email"
								/>
								{errors.email && (
									<span className="brand-text-secondary">
										Please enter your email
									</span>
								)}
							</div>

							<div className="form-group">
								<input
									name="subject"
									className="form-control"
									ref={register({ required: true })}
									placeholder="Subject"
								/>
								{errors.subject && (
									<span className="brand-text-secondary">
										Please enter your subject
									</span>
								)}
							</div>

							<div className="form-group">
								<textarea
									rows={5}
									name="message"
									className="form-control"
									ref={register({ required: true })}
									placeholder="Message"
								></textarea>
								{errors.message && (
									<span className="brand-text-secondary">
										Please enter your message
									</span>
								)}
							</div>
							<button type="submit" className="btn brand-btn">
								Send Message
							</button>
						</form>
					</div>
				</div>
				<div className="col-md-5">
					<div className="card contact-card">
						<div className="card-body">
							<h4 className="card-title mb-3">
								Gobindagonj, Gaibandha, Bangladesh
							</h4>
							<div className="d-flex align-items-center">
								<div className="contact-icon-wrap">
									<FontAwesomeIcon
										className="contact-icon"
										icon={faMapMarkerAlt}
									/>
								</div>
								<h5 className="font-weight-light">Home address</h5>
							</div>
						</div>
					</div>
					<div className="card contact-card">
						<div className="card-body">
							<h4 className="card-title mb-3">apelmahmud.dev@gmail.com</h4>
							<div className="d-flex align-items-center">
								<div className="contact-icon-wrap">
									<FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
								</div>
								<h5 className="font-weight-light">Mail address</h5>
							</div>
						</div>
					</div>
					<div className="card contact-card">
						<div className="card-body">
							<h4 className="card-title mb-3">+880 1739-801-364</h4>
							<div className="d-flex align-items-center">
								<div className="contact-icon-wrap">
									<FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
								</div>
								<h5 className="font-weight-light">Personal phone</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
