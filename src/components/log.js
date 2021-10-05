import React from 'react';
import Event from './event';

const Log = ({ state: { events }}) =>
	<div>
		<div role="log">Log:</div>
		{
			events.map(Event)
		}
	</div>;

export default Log;
