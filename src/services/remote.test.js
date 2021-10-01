import Remote from './remote';
import actions from '../core/actions';
import axios from 'axios';

describe('remote', () => {
	const { fetchEvents, createEvent } = Remote;

	test('fetchEvents fetches latest events', async () => {
		const response = { data: Symbol('response') };

		jest.spyOn(axios, 'get').mockReturnValue(response);
		// TODO: Remove the unnecessary mockReturnValue.
		jest.spyOn(actions, 'setEvents').mockReturnValue();

		await fetchEvents();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:5000');
		expect(actions.setEvents).toHaveBeenCalledWith(response.data);
	});

	test('createEvent updates a new event', async () => {
		const type = Symbol('type');

		jest.spyOn(axios, 'post');
		jest.spyOn(Remote, 'fetchEvents');

		await createEvent(type);

		expect(axios.post)
			.toHaveBeenCalledWith('http://localhost:5000', { event: type });
		expect(Remote.fetchEvents).toHaveBeenCalled();
	});
});
