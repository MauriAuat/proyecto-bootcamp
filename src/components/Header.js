import React, { useState } from 'react';
import './styles/header.css';
import logo from './images/LOGO MARVEL.jpg';
const Header = ({ finded }) => {
	const [input, setInput] = useState('');

	const handleChange = (event) => {
		event.preventDefault();
		setInput(event.target.value);
		finded(event.target.value);
	};

	return (
		<div className='container-header'>
			<img src={logo} alt='Imagen Marvel' className='image' />
			<form action='#' className='searchingNav'>
				<input
					onChange={handleChange}
					type='text'
					className='input'
					value={input}
					placeholder='Choose a character...'></input>
			</form>
		</div>
	);
};

export default Header;
