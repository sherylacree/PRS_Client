import { useEffect, useState } from "react";
import { Request } from "./Requests";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import RequestCard from "./RequestCard";


function RequestList() {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadRequests() {
		setBusy(true);
		let data = await requestAPI.list();
		setRequests(data);
		setBusy(false);
	}
	useEffect(() => {
		loadRequests();
	}, []);

	async function remove(request: Request) {
		if (
			confirm(
				"Are you sure you want to delete this Request?"
			)
		) {
			if (request.id) {
				await requestAPI.delete(request.id);
				let updatedRequests = requests.filter(
					(r) => r.id !== request.id
				);
				setRequests(updatedRequests);
				toast.success("Successfully deleted.");
			}
		}
	}

	return (
		<section className="d-flex flex-wrap gap-4 bg-light">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div
						className="spinner-border"
						role="status">
						<span className="visually-hidden">
							Loading . . .{" "}
						</span>
					</div>
				</div>
			)}

			{requests.map((request) => (
				<RequestCard
					key={request.id}
					request={request}
					onRemove={remove}
				/>
			))}
		</section>
	);
}
export default RequestList;
