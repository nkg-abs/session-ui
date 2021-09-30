const actions = {
	//TODO: Rename the action to setEvents.
	updateEvents: ({ data: { data }}) => ({
		events: data.events,
	}),

};

export default actions;
