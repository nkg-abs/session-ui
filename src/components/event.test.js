import { render } from '@testing-library/react';
import Event from './event';

describe('event', () => {
	test('event represent event details', () => {
		const time = Date.now();
		const { getByRole }
			= render(Event({ id: '1', event: 'start', time: time }));

		expect(getByRole('event')).toBeInTheDocument();
		expect(getByRole('event')).toHaveTextContent(`start: ${ time }`);
	});
});
