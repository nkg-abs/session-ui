/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/* eslint-disable react/display-name */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as Log from './components/log';
import context from './core/context';
import Remote from './services/remote';
import * as genButton from './components/genButton';
import { keys, map } from '@laufire/utils/collection';

test('renders the App', () => {
	const events = keys(context.config.events);

	jest.spyOn(Remote, 'fetchEvents').mockImplementation(() => {});
	jest.spyOn(Log, 'default').mockReturnValue(<div role="log"/>);
	const mockButton = jest.fn()
		.mockImplementation(() => {
			const event = events.shift();

			return <div key={ event } role={ event }/>;
		});

	jest.spyOn(genButton, 'default')
		.mockReturnValue(mockButton);

	const { getByRole } = render(<App/>);

	expect(Log.default).toHaveBeenCalledWith(context);
	map(context.config.events, (value, key) => {
		expect(mockButton).toHaveBeenCalledWith(context);
		expect(genButton.default).toHaveBeenCalledWith(key);
		expect(getByRole(key)).toBeInTheDocument();
	});
	expect(getByRole('log')).toBeInTheDocument();
	expect(getByRole('app')).toHaveClass('App');
});
