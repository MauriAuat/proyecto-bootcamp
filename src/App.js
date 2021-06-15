import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import Header from './components/header.js';
import Url from './components/url.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/modal.js';

function App() {
	const [search, setSearch] = useState('');

	const [modal, setModal] = useState(false);

	return (
		<Router>
			<div className='App'>
				<Header finded={(s) => setSearch(s)} />
				<Switch>
					<Route path='/:name'>
						<Url />
					</Route>
					<Route
						path='/'
						render={(props) => (
							<Cards finded={search} onClickHandler={() => setModal(true)} />
						)}></Route>
					{/* <Route path='/:name'>
						<Cards finded={search} onClickHandler={(mod) => setModal(mod)} />
					</Route> */}
				</Switch>
			</div>
			<Modal isOpen={modal} />
		</Router>
	);
}

export default App;
