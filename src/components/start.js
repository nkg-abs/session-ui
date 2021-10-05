import React from 'react';
import Remote from '../services/remote';

const Start = (context) =>
	<button role="start" onClick={ () => Remote.createEvent(context, 'start') }>
		Start
	</button>;

export default Start;
