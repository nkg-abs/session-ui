import axios from 'axios';

const Remote = {
	fetchEvents: async () => {
		await axios.get('http://localhost:5000');
	},
};

export default Remote;
