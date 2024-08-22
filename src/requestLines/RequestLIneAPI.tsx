import {
	BASE_URL,
	checkStatus,
	delay,
	parseJSON,
} from "../utility/fetchUtilities";
import {  RequestLine} from "./RequestLine";

const url = `${BASE_URL}/requestlines
`;

export const requestLineAPI = {
	list(): Promise<RequestLine[]> {
		return fetch(`${url}?_sort=name&_order=asc`)
			.then(delay(200))
			.then(checkStatus)
			.then(parseJSON);
	},

	find(id: number): Promise<RequestLine> {
		return fetch(`${url}/${id}`)
			.then(checkStatus)
			.then(parseJSON);
	},

	post(requestLines: RequestLine) {
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

	put(requestLines: RequestLine) {
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
