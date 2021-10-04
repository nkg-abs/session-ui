/* eslint-disable react/display-name */
jest.mock('../core/context', () => ({ state: { events: [] }}));
import { React, render } from '@testing-library/react';
import Log from './log';
import context from '../core/context';
import Event from './event';

describe('log', () => {
	test('log display list of events', () => {
		jest.spyOn(context.state.events, 'map')
			.mockReturnValue(<div key="1" role="event"/>);
		const { getByRole } = render(Log());

		expect(context.state.events.map).toHaveBeenCalledWith(Event);
		expect(getByRole('log')).toBeInTheDocument();
		expect(getByRole('event')).toBeInTheDocument();
	});
});
