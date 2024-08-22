import "../App";
import { RequestLine } from "./RequestLine";
import RequestLineTableRow from "./RequestLineTableRow";

interface RequestLineTableProps {
	requestLines: RequestLine[] | undefined;
}

function RequestLineTable(props: RequestLineTableProps) {
	async function remove(requestline: RequestLine) {
		// 	if (
		// 		confirm(
		// 			"Are you sure you want to delete this Item?"
		// 		)
		// 	) {
		// 		if (requestLine.id) {
		// 			await requestLineAPI.delete(requestLine.id);
		// 			let updatedRequestLine =
		// 				requestLine.filter(
		// 					(l: { id: any; }) => l.id !== requestLine.id
		// 				);
		// 			setRequestLine(updatedRequestLine);
		// 			toast.success("Successfully deleted.");
		// 		}
		// 	}
	}

	return (
		<>
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
				<tbody >
					{props.requestLines?.map((requestLine) => (
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
