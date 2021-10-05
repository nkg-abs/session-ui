/* eslint-disable max-lines-per-function */
import Remote from './remote';
import axios from 'axios';

describe('remote', () => {
	const { fetchEvents, createEvent } = Remote;
	const baseUrl = Symbol('baseUrl');
	const context = {
		state: {
			events: [],
		},
		config: {
			baseUrl,
		},
		actions: {
			setEvents: jest.fn(),
		},
	};
	const data = Symbol('data');

	test('fetchEvents fetches latest events', async () => {
		jest.spyOn(axios, 'get').mockReturnValue({ data });
		jest.spyOn(context.actions, 'setEvents').mockImplementation(() => {});

		await fetchEvents(context);

		expect(axios.get).toHaveBeenCalledWith(baseUrl);
		expect(context.actions.setEvents).toHaveBeenCalledWith(data);
	});

	test('createEvent updates a new event', async () => {
		const type = Symbol('type');
		const concat = Symbol('concat');

		jest.spyOn(context.state.events, 'concat').mockReturnValue(concat);
		jest.spyOn(axios, 'post').mockReturnValue({ data });
		jest.spyOn(Remote, 'fetchEvents').mockImplementation(() => {});

		await createEvent(context, type);

		expect(axios.post)
			.toHaveBeenCalledWith(baseUrl, { event: type });
		expect(context.state.events.concat).toHaveBeenCalledWith(data);
		expect(context.actions.setEvents).toHaveBeenCalledWith(concat);
	});
});
