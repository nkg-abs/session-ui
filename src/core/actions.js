const actions = {

	updateEvents: ({ data: { data }}) => ({
		events: data.events,
	}),

};

export default actions;
