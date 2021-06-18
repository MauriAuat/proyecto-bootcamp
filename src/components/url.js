import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import IndividualCard from './individual-card.js';

const Url = ({ onClickHandler, fetchCharacter }) => {
	const { name } = useParams();
	const hash = '790a74f4384888f375e4dc17bec6a2d4';
	const [char, setChar] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(
				`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=6eae7769f2bafe26a05430172ae6db23d&hash=${hash}`
			);
			const characters = await data.json();
			setChar(characters.data.results);
		};
		getData();
	}, [name]);

	return (
		<Link to={`/${name}`}>
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
		</Link>
	);
};

export default Url;
