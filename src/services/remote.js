import axios from 'axios';

const Remote = {
	fetchEvents: async (context) => {
		const { baseUrl } = context.config;
		const { data } = await axios.get(baseUrl);

		context.actions.setEvents(data);
	},

	createEvent: async (context, type) => {
		const { baseUrl } = context.config;

		const { data } = await axios.post(baseUrl, {
			event: type,
		});

		const { events } = context.state;

		context.actions.setEvents(events.concat(data));
	},

};

export default Remote;
