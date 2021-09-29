/* eslint-disable react/display-name */

jest.mock('../core/context', () =>	({ state: { events: [{}] }}));
jest.mock('./event', () => () => <div key="1" role="event"/>);

import React from 'react';
import { render } from '@testing-library/react';
import Log from './log';

describe('log', () => {
	test('log display list of events', () => {
		const { getByRole } = render(Log());

		expect(getByRole('log')).toBeInTheDocument();
		expect(getByRole('event')).toBeInTheDocument();
	});
});
