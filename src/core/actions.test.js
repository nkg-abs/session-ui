import actions from './actions';

describe('actions', () => {
	const { setEvents, updatePreviousEvent } = actions;

	test('setEvents, updates entire events from db', () => {
		const events = [Symbol('events')];

		const result = setEvents({ data: events });

		expect(result).toEqual({ events });
	});

	test('updatePreviousEvent includes previousEvent', () => {
		const previousEvent = Symbol('previousEvent');

		const result = updatePreviousEvent({ data: previousEvent });

		expect(result).toEqual({ previousEvent });
	});
});
