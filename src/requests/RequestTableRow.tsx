import { Link } from "react-router-dom";
import { Request } from "./Request";
import { SyntheticEvent } from "react";

interface RequestTableRowProps {
	request: Request;
	onRemove: (request: Request) => void;
}


export default function RequestTableRow({request ,onRemove,}:RequestTableRowProps) {

	

		function badgeType(request: Request) {
		  let badgeInfo;
		  if (request.status === "NEW") {
			badgeInfo = "text-bg-primary";
		  } else if (request.status === "APPROVED") {
			badgeInfo = "text-bg-success";
		  } else if (request.status === "REJECTED") {
			badgeInfo = "text-bg-danger";
		  } else if (request.status === "REVIEW") {
			badgeInfo = "text-bg-warning";
		  }
		  return badgeInfo;
		}

	return (
		<tr>
            <td> {request.id}</td>
		
			<td className="d-flex-column">
				<strong>{request.description} </strong>{" "}
				<br />
				<small>{request.justification}</small>
			</td>
			<td>
          <span className={`badge ${badgeType(request)}`}>{request.status}</span>
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

					<Link
						className="small"
						to={"/requests"}
						onClick={(
							event: SyntheticEvent
						) => {
							event.preventDefault();
							onRemove( request);
						}}>
						delete
					</Link>




					{/* <a
						className="small"
						onClick={(
							event: SyntheticEvent
						) => {
							event.preventDefault();
							onRemove(request);
						}}>
						delete
					</a> */}
				</div>
			</td>
		</tr>
	);
}


