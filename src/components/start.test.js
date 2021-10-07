import { render, screen, fireEvent } from '@testing-library/react';
import EventManager from '../services/eventManager';
import Start from './start';

describe('start', () => {
	const context = Symbol('context');

	test('start component render with appropriate text', () => {
		const component = render(Start(context)).getByRole('start');

		expect(component).toBeInTheDocument();
		expect(screen.getByText('Start')).toBeInTheDocument();
	});

	test('when clicks triggers the action, createEvent', () => {
		jest.spyOn(EventManager, 'createEvent').mockReturnValue();
		const component = render(Start(context)).getByRole('start');

		fireEvent.click(component);

		expect(EventManager.createEvent)
			.toHaveBeenCalledWith({ ...context, data: 'start' });
	});
});
