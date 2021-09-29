import { React, useEffect } from 'react';
import './App.scss';
import Log from './components/log';
import Remote from './services/remote';

const App = () =>	{
	useEffect(Remote.fetchEvents, []);

	return (
		<div className="App" role="app">
			{ Log() }
		</div>
	);
};

export default App;
