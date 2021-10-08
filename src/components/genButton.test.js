/* eslint-disable max-lines-per-function */
import { fireEvent, render } from '@testing-library/react';
import EventManager from '../services/eventManager';
import genButton from './genButton';
import { rndValue } from '@laufire/utils/random';
import { keys } from '@laufire/utils/collection';
import context from '../core/context';

describe('genButton', () => {
	const mockContext = { config: { events: context.config.events }};
	const event = rndValue(keys(context.config.events));
	const Button = genButton(event);

	test('genButton return dynamic event button', () => {
		const { getByRole } = render(Button(mockContext));

		expect(getByRole(event)).toBeInTheDocument();
		expect(getByRole(event))
			.toHaveTextContent(context.config.events[event].label);
	});

	test('when clicked triggers createEvent', () => {
		jest.spyOn(EventManager, 'createEvent').mockImplementation();
		const component = render(Button(mockContext))
			.getByRole(event);

		fireEvent.click(component);
		expect(EventManager.createEvent)
			.toHaveBeenCalledWith({ ...mockContext, data: event });
	});
});
