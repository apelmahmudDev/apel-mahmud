import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';
import emailjs from 'emailjs-com';
import { cardInfo } from '../../MyData/Index';

const Contact = () => {
	window.scroll({
		top: 0,
	});

	const cardData = cardInfo;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_telqp7t',
				'protfolio_9zhg6yb',
				e.target,
				'user_RatF0sVS2O0KyBmqyps7x'
			)
			.then(
				(result) => {
					const message = document.getElementById('message');
					message.style.display = 'block';
					setTimeout(() => {
						message.style.display = 'none';
					}, 5000);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div className='container'>
			<div className='text-center my-5'>
				<Typical
					steps={['Get In Touch...', 1000]}
					loop={Infinity}
					wrapper='h1'
					className='contact-title'
				/>
				<p>
					If I can be of assistance, please do not hesitate to contact me
					<br></br> And I will give you my best.
				</p>
			</div>
			<div className='row'>
				<div className='col-md-7'>
					<div className='form-area'>
						<h2 className='text-center'>Get In Touch</h2>
						<form onSubmit={sendEmail}>
							<div className='form-group'>
								<input
									name='name'
									className='form-control'
									required
									placeholder='Name'
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
									name='email'
									className='form-control'
									required
									placeholder='Email'
								/>
							</div>
							<div className='form-group'>
								<input
									name='subject'
									className='form-control'
									required
									placeholder='Subject'
								/>
							</div>
							<div className='form-group'>
								<textarea
									rows={5}
									name='message'
									className='form-control'
									required
									placeholder='Message'
								></textarea>
							</div>
							<button type='submit' className='btn brand-btn'>
								Send Message
							</button>
							<p
								id='message'
								style={{ display: 'none' }}
								className='mt-3 brand-text-success'
							>
								<FontAwesomeIcon icon={faCheck} />
								<span> Message sent successfully. Thanks!</span>
							</p>
						</form>
					</div>
				</div>
				<div className='col-md-5'>
					{cardData.map((info) => (
						<div className='card contact-card' key={info.id}>
							<div className='card-body'>
								<h4 className='card-title mb-3'>{info.title}</h4>
								<div className='d-flex align-items-center'>
									<div className='contact-icon-wrap'>{info.icon}</div>
									<h5 className='font-weight-light'>{info.role}</h5>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Contact;
