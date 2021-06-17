import React from 'react';
import './styles/comics.css';
const Comic = ({ comic, character }) => {
	return (
		<div className='image-container'>
			<img
				className='image-comic'
				src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
				alt={comic.name}></img>
			<h4 style={{ margin: '1px 0 0 0' }}>{comic.title}</h4>
		</div>
	);
};

export default Comic;
