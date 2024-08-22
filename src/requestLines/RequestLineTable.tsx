import { useEffect, useState } from "react";
import "../App";
import toast from "react-hot-toast";
import { RequestLine } from "./RequestLine";
import RequestLineTableRow from "./RequestLineTableRow";
import { requestLineAPI } from "./RequestLIneAPI";



function RequestLineTable() {
	const [requestLine, setRequestLine] = useState<RequestLine[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadRequestLines() {
		try {
			setBusy(true);
			const data = await requestLineAPI.list();
			setRequestLine(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequestLines();
	}, []);

	async function remove(requestLine: RequestLine) {
		if (
			confirm(
				"Are you sure you want to delete this Item?"
			)
		) {
			if (requestLine.id) {
				await requestLineAPI.delete(requestLine.id);
				let updatedRequestLine =
					requestLine.filter(
						(l: { id: any; }) => l.id !== requestLine.id
					);
				setRequestLine(updatedRequestLine);
				toast.success("Successfully deleted.");
			}
		}
	}

	return (
		<>
			{busy && (
				<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
					<div
						className=" spinner-border text-primary"
						role="status">
						<span className="visually-hidden">
							Loading...
						</span>
					</div>
				</section>
			)}
			<table className="table table-hover w-75">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Amount</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{requestLine.map((requestLine) => (
						<RequestLineTableRow
							key={requestLine.id}
							requestLine={requestLine}
							onRemove={remove}
						/>
					))}
				</tbody>
			</table>
		</>
	);
}

export default RequestLineTable;
