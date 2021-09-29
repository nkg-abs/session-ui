/* eslint-disable react/display-name */
jest.mock('./components/log', () => () => <div role="log"/>);

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('log')).toBeInTheDocument();
	expect(getByRole('app')).toHaveClass('App');
});
