import React from 'react';
import EventManager from '../services/eventManager';

const Start = (context) =>
	<button
		role="start"
		onClick={ () =>
			EventManager.createEvent({ ...context, data: 'start' }) }
	>
		Start
	</button>;

export default Start;
