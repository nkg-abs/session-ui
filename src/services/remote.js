import context from '../core/context';
import axios from 'axios';

const Remote = {
	fetchEvents: async () => {
		const events = await axios.get('http://localhost:5000');

		context.actions.updateEvents(events);
	},
};

export default Remote;
