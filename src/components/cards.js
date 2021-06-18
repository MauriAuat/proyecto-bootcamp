import React, { useState, useEffect } from 'react';
import './styles/cards.css';
import IndividualCard from './individual-card.js';

const Cards = ({ finded, onClickHandler, fetchCharacter }) => {
	const hash = '790a74f4384888f375e4dc17bec6a2d4';
	const [char, setChar] = useState([]);

	useEffect(() => {
		const getData = async () => {
			if (finded === '') {
				const data = await fetch(
					`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=eae7769f2bafe26a05430172ae6db23d&hash=${hash}`
				);
				const characters = await data.json();
				// console.log(characters);compruebo que la informacion traída del fetch se guarde en characters

				setChar(characters.data.results); //guardo como estado la informacion de los 20 primeros personajes
			} else {
				const data = await fetch(
					`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${finded}&ts=1&apikey=eae7769f2bafe26a05430172ae6db23d&hash=${hash}`
				);
				const characters = await data.json();
				setChar(characters.data.results);
			}
		};
		getData();
	}, [finded]);

	return (
		<div className='background'>
			{char.map((personaje) => (
				<IndividualCard
					onClickHandler={onClickHandler}
					key={personaje.id}
					personaje={personaje}
					fetchCharacter={fetchCharacter}
				/>
			))}
		</div>
	);
};

export default Cards;
