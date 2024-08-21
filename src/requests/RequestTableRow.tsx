import { Link } from "react-router-dom";
import { Request } from "./Request";
import { SyntheticEvent } from "react";

interface RequestTableRowProps {
	request: Request;
	onRemove: (request: Request) => void;
}

function RequestTableRow({
	request,
	onRemove,
}: RequestTableRowProps) {
	return (
		<tr>
            <td> {request.id}</td>
		
			<td className="d-flex-column">
				<strong>{request.description} </strong>{" "}
				<br />
				<small>{request.justification}</small>
			</td>
			<td>
				<span className="badge text-bg-secondary rounded-pill ">
					{request.status}
				</span>
			</td>
			<td> $ {request.total}</td>
			<td>
				{request?.user?.firstname}{" "}
				{request?.user?.lastname} 
                <br />
                {request.deliveryMode}
			</td>
			<td>
				<div className="d-flex gap-2">
					<Link
						className="small"
						to={`/requests/edit/${request.id}`}>
						edit
					</Link>
					|
					<Link
						className="small"
						to={`/requests/detail/${request.id}`}>
						review
					</Link>
					|
					<a
						className="small"
						onClick={(
							event: SyntheticEvent
						) => {
							event.preventDefault();
							onRemove(request);
						}}>
						delete
					</a>
				</div>
			</td>
		</tr>
	);
}

export default RequestTableRow;
