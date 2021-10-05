import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as Log from './components/log';
import * as Start from './components/start';
import context from './core/context';
import Remote from './services/remote';

test('renders the App', () => {
	jest.spyOn(Remote, 'fetchEvents').mockImplementation(() => {});
	jest.spyOn(Log, 'default').mockReturnValue(<div role="log"/>);
	jest.spyOn(Start, 'default').mockReturnValue(<div role="start"/>);
	const { getByRole } = render(<App/>);

	expect(Log.default).toHaveBeenCalledWith(context);
	expect(Start.default).toHaveBeenCalledWith(context);
	expect(getByRole('log')).toBeInTheDocument();
	expect(getByRole('app')).toHaveClass('App');
	expect(getByRole('start')).toBeInTheDocument();
});
