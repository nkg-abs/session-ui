/* eslint-disable max-lines-per-function */
import { React, render } from '@testing-library/react';
import context from '../core/context';
import { keys, clone } from '@laufire/utils/collection';
import * as genButton from './genButton';
import Controllers from './controllers';
import { rndValue } from '@laufire/utils/random';
import transitions from '../services/eventManager/transitions';

describe('controllers', () => {
	test('returns multiple generated components', () => {
		const events = keys(context.config.events);
		const previousEvent = rndValue(events);
		const transitionsEvents = clone(transitions[previousEvent]);

		const mockContext = { state: { previousEvent }};
		const mockButton = jest.fn()
			.mockImplementation(() => {
				const event = transitionsEvents.shift();

				return <div key={ event } role={ event }/>;
			});

		jest.spyOn(genButton, 'default')
			.mockReturnValue(mockButton);

		const { getByRole } = render(Controllers(mockContext));

		transitions[previousEvent].forEach((event) => {
			expect(mockButton).toHaveBeenCalledWith(mockContext);
			expect(genButton.default).toHaveBeenCalledWith(event);
			expect(getByRole(event)).toBeInTheDocument();
		});
	});
});
