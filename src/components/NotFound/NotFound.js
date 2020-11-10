import React from 'react';
import { Link } from 'react-router-dom';
import sorryImage from '../../images/sorry.png';

const styles = {
	root: {
        backgroundColor: '#FFFFFF',
        color: '#1B1A07',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		backgroundColor: '#fff',
	},
	sorryImage: {
		height: '100px',
	},
	backbtn: {
		textDecoration: 'none',
	},
};

const NotFound = () => {
	return (
		<div style={styles.root}>
			<div className="text-center">
				<img style={styles.sorryImage} src={sorryImage} alt="" />
				<div>
					<h4>404</h4>
					<h6>Page Not Found</h6>
					<Link to="/" style={styles.backbtn}>
						<button className="btn btn-success" style={{ fontWeight: 'bold' }}>
							{' '}
							Back to home
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
