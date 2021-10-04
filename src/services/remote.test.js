/* eslint-disable max-lines-per-function */
import Remote from './remote';
import actions from '../core/actions';
import axios from 'axios';
import context from '../core/context';

describe('remote', () => {
	const { fetchEvents, createEvent } = Remote;
	const { baseUrl } = context.config;

	test('fetchEvents fetches latest events', async () => {
		const response = { data: Symbol('response') };

		jest.spyOn(axios, 'get').mockReturnValue(response);
		jest.spyOn(actions, 'setEvents').mockImplementation(() => {});

		await fetchEvents();

		expect(axios.get).toHaveBeenCalledWith(baseUrl);
		expect(actions.setEvents).toHaveBeenCalledWith(response.data);
	});

	test('createEvent updates a new event', async () => {
		const type = Symbol('type');

		jest.spyOn(axios, 'post');
		jest.spyOn(Remote, 'fetchEvents').mockImplementation(() => {});

		await createEvent(type);

		expect(axios.post)
			.toHaveBeenCalledWith(baseUrl, { event: type });
		expect(Remote.fetchEvents).toHaveBeenCalled();
	});
});
