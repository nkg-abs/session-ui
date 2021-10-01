import React from 'react';
import Remote from '../services/remote';

const Start = () =>
	<button role="start" onClick={ () => Remote.createEvent('start') }>
		Start
	</button>;

export default Start;
