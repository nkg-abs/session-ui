import { render } from '@testing-library/react';
import Event from './event';
import { rndBetween } from '@laufire/utils/random';
describe('event', () => {
	test('event represent event details', () => {
		const time = rndBetween(0, 1);
		const { getByRole }
			= render(Event({ id: '1', event: 'start', time: time }));

		expect(getByRole('event')).toBeInTheDocument();
		expect(getByRole('event')).toHaveTextContent(`start: ${ time }`);
	});
});
