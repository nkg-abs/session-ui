import React from 'react';
import Event from './event';

const Log = ({ state: { events }}) =>
	<div role="log">
		Log:
		{
			events.map(Event)
		}
	</div>;

export default Log;
