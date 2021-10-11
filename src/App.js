import { React, useEffect } from 'react';
import './App.scss';
import Log from './components/log';
import Remote from './services/remote';
import context from './core/context';
import Controllers from './components/controllers';

const App = () =>	{
	useEffect(() => Remote.fetchEvents(context), []);

	return (
		<div className="App" role="app">
			{ Controllers(context) }
			{ Log(context) }
		</div>
	);
};

export default App;
