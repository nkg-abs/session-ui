import React from 'react';
import context from '../core/context';
import Event from './event';

const Log = () =>
	<div>
		<div role="log">Log:</div>
		{
			context.state.events.map(Event)
		}
	</div>;

export default Log;
