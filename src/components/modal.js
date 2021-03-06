import React, { useState, useEffect } from 'react';
import './styles/modal.css';
import Comic from './comics';

const Modal = ({ isOpen, closeModal, character }) => {
	const hash = '790a74f4384888f375e4dc17bec6a2d4';

	const handleModalDialogueClick = (e) => {
		e.stopPropagation();
	};

	const [comics, setComics] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await fetch(
				`https://gateway.marvel.com:443/v1/public/characters/${character.id}/comics?ts=1&apikey=eae7769f2bafe26a05430172ae6db23d&hash=${hash}`
			);
			const allcomics = await data.json();
			setComics(allcomics.data.results);
		};
		getData();
	}, [character]);

	return (
		<div className={`modal ${isOpen && 'open-modal'}`} onClick={closeModal}>
			<div className='modal-content' onClick={handleModalDialogueClick}>
				<button className='close-button' onClick={closeModal}>
					X
				</button>
				<h2 className='title'>{character.name}</h2>
				<h3 className='subtitle'>Character Description: </h3>
				<h5>{character.description}</h5>
				<h3 className='comic-list'>COMICS LIST:</h3>
				<div className='info-comic'>
					{comics.map((comic) => (
						<Comic key={comic.id} comic={comic} character={character} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Modal;
