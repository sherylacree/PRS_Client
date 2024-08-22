import { Link } from "react-router-dom";
import { RequestLine } from "./RequestLine";
import { SyntheticEvent } from "react";

import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface RequestLineTableRowProps {
	requestLine: RequestLine;
	onRemove: (requestLine: RequestLine) => void;
}

function RequestLineTableRow({
	requestLine,
	onRemove,
}: RequestLineTableRowProps) {
	return (
		<tr>
			<td>{requestLine.product?.name}</td>
			<td>${requestLine.product?.price}</td>
			<td> {requestLine.quantity}</td>

			<td>
				$
				{requestLine.quantity &&
					`${
						(requestLine.product?.price ?? 0) *
						(requestLine.quantity ?? 0)
					}`}
			</td>

			<td>
				<div className="d-flex gap-2">
					<Link
						className="nav-link "
						to={`requestlines/edit/${requestLine.id}`}>
						<svg
							className="bi me-2"
							width={15}
							height={15}
							fill="currentColor">
							<use xlinkHref={`${bootstrapIcons}#pencil`} />
						</svg>
					</Link>
					<Link to={`/requestlines/edit/${requestLine.id}`}>
						<svg
							className="bi me-2"
							width={15}
							height={15}
							fill="currentColor"
							onClick={(event: SyntheticEvent) => {
								event.preventDefault();
								onRemove(requestLine);
							}}>
							<use xlinkHref={`${bootstrapIcons}#trash3`} />
						</svg>
					</Link>
				</div>
			</td>
		</tr>
	);
}

export default RequestLineTableRow;
