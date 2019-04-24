import axios from 'axios';

const api = axios.create({
	baseURL: "https://node-week-6.herokuapp.com"
});

export default api;
