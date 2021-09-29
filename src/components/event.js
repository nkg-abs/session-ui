import React from 'react';

const Event = ({ id, event, time }) =>
	<div key={ id } role="event">{ event }: { time } </div>;

export default Event;
