import context from '../core/context';
import axios from 'axios';

const Remote = {
	fetchEvents: async () => {
		//TODO: Get the baseURL from config.
		const events = await axios.get('http://localhost:5000');

		//TODO: Pass the data, not the response.
		context.actions.updateEvents(events);
	},
};

export default Remote;
