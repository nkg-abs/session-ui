import context from '../core/context';
import axios from 'axios';

const { baseUrl } = context.config;

const Remote = {
	fetchEvents: async () => {
		const { data } = await axios.get(baseUrl);

		context.actions.setEvents(data);
	},

	createEvent: async (type) => {
		await axios.post(baseUrl, {
			event: type,
		});

		Remote.fetchEvents();
	},

};

export default Remote;
