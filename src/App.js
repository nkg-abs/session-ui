import { React, useEffect } from 'react';
import './App.scss';
import Log from './components/log';
import Start from './components/start';
import Remote from './services/remote';
import context from './core/context';

const App = () =>	{
	useEffect(() => Remote.fetchEvents(context), []);

	return (
		<div className="App" role="app">
			<div>{ Start(context) }</div>
			{ Log(context) }
		</div>
	);
};

export default App;
