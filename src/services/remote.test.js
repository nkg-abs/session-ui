import Remote from './remote';
import actions from '../core/actions';
import axios from 'axios';

describe('remote', () => {
	test('fetchEvents updates latest events', async () => {
		//TODO: Rename the variable as Response, as a promise is not returned when an async call is preceded by await.
		const promise = Symbol('promise');

		jest.spyOn(axios, 'get').mockReturnValue(promise);
		//TODO: Remove the unnecessary mockReturnValue.
		jest.spyOn(actions, 'updateEvents').mockReturnValue();

		await Remote.fetchEvents();

		expect(axios.get).toHaveBeenCalledWith('http://localhost:5000');
		expect(actions.updateEvents).toHaveBeenCalledWith(promise);
	});
});
