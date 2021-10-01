import Remote from './remote';
import actions from '../core/actions';
import axios from 'axios';

describe('remote', () => {
	const { fetchEvents, createEvent } = Remote;

	test('fetchEvents fetches latest events', async () => {
		const promise = { data: Symbol('promise') };

		// TODO: Rename the variable as Response, as a promise is not returned when an async call is preceded by await.
		jest.spyOn(axios, 'get').mockReturnValue(promise);
		// TODO: Remove the unnecessary mockReturnValue.
		jest.spyOn(actions, 'updateEvents').mockReturnValue();

		await fetchEvents();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:5000');
		expect(actions.updateEvents).toHaveBeenCalledWith(promise.data);
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
