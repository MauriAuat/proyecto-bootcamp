import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import Header from './components/header.js';
import Url from './components/url.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/modal.js';

function App() {
	const [search, setSearch] = useState('');
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [character, setCharacter] = useState(null);

	return (
		<Router>
			<div className='App'>
				<Header finded={(s) => setSearch(s)} />
				<Switch>
					<Route
						path='/:name'
						render={(props) => (
							<Url
								onClickHandler={() => setIsOpenModal(true)}
								fetchCharacter={(char) => setCharacter(char)}
							/>
						)}></Route>
					<Route
						path='/'
						render={(props) => (
							<Cards
								finded={search}
								onClickHandler={() => setIsOpenModal(true)}
								fetchCharacter={(char) => setCharacter(char)}
							/>
						)}></Route>
				</Switch>
				{isOpenModal && character && (
					<Modal
						isOpen={isOpenModal}
						closeModal={() => setIsOpenModal(false)}
						character={character}
					/>
				)}
			</div>
		</Router>
	);
}

export default App;
