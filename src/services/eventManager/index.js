import Remote from '../remote';

const EventManager = {

	createEvent: (context) => {
		Remote.createEvent(context, context.data);
		context.actions.updatePreviousEvent(context.data);
	},

};

export default EventManager;
