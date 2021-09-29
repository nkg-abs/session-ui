import Remote from './remote';
import actions from '../core/actions';
import axios from 'axios';

describe('remote', () => {
	test('fetchEvents updates latest events', async () => {
		const promise = Symbol('promise');

		jest.spyOn(axios, 'get').mockReturnValue(promise);
		jest.spyOn(actions, 'updateEvents').mockReturnValue();

		await Remote.fetchEvents();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:5000');
		expect(actions.updateEvents).toHaveBeenCalledWith(promise);
	});
});
