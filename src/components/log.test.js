import { React, render } from '@testing-library/react';
import Log from './log';
import Event from './event';

describe('log', () => {
	test('log display list of events', () => {
		const context = { state: { events: [] }};

		jest.spyOn(context.state.events, 'map')
			.mockReturnValue(<div key="1" role="event"/>);

		const { getByRole } = render(Log(context));

		expect(context.state.events.map).toHaveBeenCalledWith(Event);
		expect(getByRole('log')).toBeInTheDocument();
		expect(getByRole('event')).toBeInTheDocument();
	});
});
