import http from 'k6/http';
import {check} from 'k6';

export let options = {
	 // vus: 100,
	 // iterations: 10000,
	vus: 10,
	iterations: 10000,
};

const BASE_URL = 'https://iskfi7e1ce.execute-api.us-east-1.amazonaws.com/request-rds';

export default function () {
	let res = http.get(BASE_URL);

	check(res, {
		'status is 200': (r) => r.status === 200,
	});
}