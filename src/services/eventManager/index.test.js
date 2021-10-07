import Remote from '../remote';
import EventManager from '.';

describe('eventManager', () => {
	test('createEvent initialize event in state', () => {
		const event = Symbol('event');
		const context = { data: event, actions: {
			updatePreviousEvent: jest.fn(),
		}};

		jest.spyOn(Remote, 'createEvent').mockImplementation();
		jest.spyOn(context.actions, 'updatePreviousEvent');

		EventManager.createEvent(context);

		expect(context.actions.updatePreviousEvent)
			.toHaveBeenCalledWith(event);
		expect(Remote.createEvent).toHaveBeenCalledWith(context, event);
	});
});
