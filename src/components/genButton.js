/* eslint-disable react/display-name */
import React from 'react';
import EventManager from '../services/eventManager';

const genButton = (event) => (context) => {
	const { config } = context;

	return (
		<button
			key={ event }
			role={ event }
			onClick={ () =>
				EventManager.createEvent({ ...context, data: event }) }
		>
			{ config.events[event].label }
		</button>
	);
};

export default genButton;
