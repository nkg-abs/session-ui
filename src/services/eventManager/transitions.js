const transitions = {
	start: ['pause', 'stop'],
	pause: ['resume', 'stop'],
	resume: ['pause', 'stop'],
	stop: ['start'],
};

export default transitions;
