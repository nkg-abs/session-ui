const actions = {
	setEvents: ({ data }) => ({
		events: data,
	}),
	updatePreviousEvent: ({ data: previousEvent }) => ({
		previousEvent,
	}),
};

export default actions;
