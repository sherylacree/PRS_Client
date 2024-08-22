import {
	BASE_URL,
	checkStatus,
	delay,
	parseJSON,
} from "../utility/fetchUtilities";
import {  RequestLines } from "./RequestLine";

const url = `${BASE_URL}/requests
`;

export const requestLinesAPI = {
	list(): Promise<RequestLines[]> {
		return fetch(`${url}?_sort=name&_order=asc`)
			.then(delay(200))
			.then(checkStatus)
			.then(parseJSON);
	},

	find(id: number): Promise<RequestLines> {
		return fetch(`${url}/${id}`)
			.then(checkStatus)
			.then(parseJSON);
	},

	post(requestLines: RequestLines) {
		return fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify(requestLines),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	put(requestLines: RequestLines) {
		return fetch(`${url}/${requestLines.id}`, {
			method: "PUT",
			body: JSON.stringify(requestLines),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(checkStatus);
		// .then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/${id}`, {
			method: "DELETE",
		}).then(checkStatus);
	},
};
