import React, { useState, useEffect } from 'react';
import './styles/cards.css';
import IndividualCard from './individual-card.js';

const Cards = ({ finded, onClickHandler }) => {
	const hash = '41cd88a2c0ac24f09b136ff769461b9f';
	const [char, setChar] = useState([]);

	useEffect(() => {
		const getData = async () => {
			if (finded === '') {
				const data = await fetch(
					`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=658e18f8683906f0d0b8faf4bc7cf703&hash=${hash}`
				);
				const characters = await data.json();
				// console.log(characters);compruebo que la informacion traída del fetch se guarde en characters

				//   setTodos(characters.data);
				setChar(characters.data.results); //guardo como estado la informacion de los 20 primeros personajes
			} else {
				const data = await fetch(
					`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${finded}&ts=1&apikey=658e18f8683906f0d0b8faf4bc7cf703&hash=${hash}`
				);
				const characters = await data.json();
				// console.log(characters);compruebo que la informacion traída del fetch se guarde en characters

				//   setTodos(characters.data);
				setChar(characters.data.results); //guardo como estado la informacion de los 20 primeros personajes
			}
		};
		getData();
	}, [finded]);
	// const [modal, setModal] = useState();
	return (
		<div className='background'>
			{char.map((personaje) => (
				<IndividualCard
					onClickHandler={onClickHandler}
					key={personaje.id}
					personaje={personaje}
				/>
			))}
		</div>
	);
};

export default Cards;
