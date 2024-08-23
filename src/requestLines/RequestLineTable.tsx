import "../App";
import { RequestLine } from "./RequestLine";
import RequestLineTableRow from "./RequestLineTableRow";
import { Request } from "../requests/Request";

interface RequestLineTableProps {
	request: Request;
	onRemove: (requestline: RequestLine) => void;
}

function RequestLineTable ({request, onRemove}:RequestLineTableProps){
	
			// 	confirm(
			// 		"Are you sure you want to delete this Item?"
			// 	)
			// ) {
			// 	if (requestLine.id) {
			// 		await requestLineAPI.delete(requestLine.id);
			// 		let updatedRequestLine =
			// 			requestLine.filter(
			// 				(l: { id: any; }) => l.id !== requestLine.id
			// 			);
			// 		setRequestLine(updatedRequestLine);
			// 		toast.success("Successfully deleted.");
			// 	}
			// }
	

	return (
		<>
		
			<table className="table table-hover w-75">
				<thead>
					<h3>Items</h3>
					<tr >
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Amount</th>
						<th></th>
					</tr>
				</thead>
				<tbody >
					{request.requestLines?.map((requestline) => (
						<RequestLineTableRow
							key={requestline.id}
							requestLine={requestline}
							remove={onRemove}
						/>
					))}

<tr>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <strong>Total:</strong> ${request.total}
          </td>
          <td></td>
        </tr>
				</tbody>
			</table>
		</>
	);
}

export default RequestLineTable;
