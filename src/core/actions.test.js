import actions from './actions';

describe('actions', () => {
	test('updateEvents, updates entire events from db', () => {
		const events = Symbol('events');
		const { updateEvents } = actions;

		const result = updateEvents({ data: { events }});

		expect(result).toEqual({ events });
	});
});
