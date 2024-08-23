import { Link } from "react-router-dom";
import { Request } from "./Request";
import { SyntheticEvent } from "react";

interface RequestCardProps {
	request: Request;
	onRemove: (request: Request) => void;
}

function RequestCard({
	request,
	onRemove,
}: RequestCardProps) {
	return (
		<article
			className="card p-4"
			key={request.id}>
			<Link to={`/requests/detail/${request.id}`}>
				<strong> {request.description}</strong>
			</Link>
			<small>Status: {request.status}</small>
			<small></small>
			<small>
				Delivery Method: {request.deliveryMode}
			</small>
			<small>
				Requested By: {request.user?.firstname}{" "}
				{request.user?.lastname}
			</small>
			
			<small>Total: ${request.total}</small>
			<div className="d-flex gap-2">
				<Link
					className="small"
					to={`/requests/edit/${request.id}`}>
					edit
				</Link>
				|
				<a
					className="small"
					onClick={(event: SyntheticEvent) => {
						event.preventDefault();
						onRemove(request);
					}}>
					delete
				</a>
			</div>
		</article>
	);
}

export default RequestCard;
