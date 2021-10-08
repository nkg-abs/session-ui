import { React, useEffect } from 'react';
import './App.scss';
import Log from './components/log';
import Remote from './services/remote';
import context from './core/context';
import { keys } from '@laufire/utils/collection';
import genButton from './components/genButton';

const App = () =>	{
	useEffect(() => Remote.fetchEvents(context), []);

	return (
		<div className="App" role="app">
			{ keys(context.config.events).map((event) =>
				genButton(event)(context))}
			<div>{ Log(context) }</div>
		</div>
	);
};

export default App;
