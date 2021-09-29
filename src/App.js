import { React, useEffect } from 'react';
import './App.scss';
import Remote from './services/remote';

const App = () =>	{
	useEffect(Remote.fetchEvents, []);

	return (
		<div className="App">App</div>
	);
};

export default App;
