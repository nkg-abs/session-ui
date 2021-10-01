import context from '../core/context';
import axios from 'axios';

const Remote = {
	fetchEvents: async () => {
		// TODO: Get the baseURL from config.
		const { data } = await axios.get('http://localhost:5000');

		context.actions.setEvents(data);
	},

	createEvent: async (type) => {
		await axios.post('http://localhost:5000', {
			event: type,
		});

		Remote.fetchEvents();
	},

};

export default Remote;
