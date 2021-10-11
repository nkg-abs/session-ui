jest.mock('./core/context', () => Symbol('context'));
import { React, render } from '@testing-library/react';
import App from './App';
import * as Controllers from './components/controllers';
import * as Log from './components/log';
import context from './core/context';
import Remote from './services/remote';

test('renders the App', () => {
	jest.spyOn(Remote, 'fetchEvents').mockImplementation(() => {});
	jest.spyOn(Log, 'default').mockReturnValue(<div role="log"/>);
	jest.spyOn(Controllers, 'default')
		.mockReturnValue(<div role="controllers"/>);

	const { getByRole } = render(<App/>);

	expect(getByRole('log')).toBeInTheDocument();
	expect(getByRole('controllers')).toBeInTheDocument();
	expect(getByRole('app')).toHaveClass('App');
	expect(Log.default).toHaveBeenCalledWith(context);
});
