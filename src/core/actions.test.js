import actions from './actions';

describe('actions', () => {
	test('setEvents, updates entire events from db', () => {
		const events = Symbol('events');
		const { setEvents } = actions;

		const result = setEvents({ data: { events }});

		expect(result).toEqual({ events });
	});
});
