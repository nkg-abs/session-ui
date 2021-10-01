import { React, useEffect } from 'react';
import './App.scss';
import Log from './components/log';
import Start from './components/start';
import Remote from './services/remote';

const App = () =>	{
	useEffect(Remote.fetchEvents, []);

	return (
		<div className="App" role="app">
			<div>{ Start() }</div>
			{ Log() }
		</div>
	);
};

export default App;
