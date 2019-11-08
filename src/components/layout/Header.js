import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
			<Link to="/" className="link">
				Home
			</Link>{' '}
			|{' '}
			<Link className="link" to="/About">
				About
			</Link>
		</header>
	);
};
const headerStyle = {
	color: '#fff',
	background: '#333',
	textAlign: 'center',
	padding: '10px'
};

export default Header;
