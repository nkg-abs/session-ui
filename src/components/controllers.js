import transitions from '../services/eventManager/transitions';
import genButton from './genButton';

const Controllers = (context) =>
	transitions[context.state.previousEvent].map((event) =>
		genButton(event)(context));

export default Controllers;
