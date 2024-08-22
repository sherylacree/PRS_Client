import { Link, NavLink } from "react-router-dom";
import { RequestLine } from "./RequestLine";
import { SyntheticEvent } from "react";
import { Product } from "../products/Products";
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
			<td>{Product.name}</td>
			<td>{Product.price}</td>
			<td> {requestLine.quantity}</td>
			<td>
				{" "}
				${Product.price * requestLine.quantity}
			</td>
			<td>
				<NavLink
					className="nav-link"
					to={`/requestlines/edit/${requestLine.id}`}>
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#pencil`}
						/>
					</svg>
					Request
				</NavLink>
			</td>
			<td>
				<Link
					to={`/requestlines/edit/${requestLine.id}`}>
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor"
						onClick={(
							event: SyntheticEvent
						) => {
							event.preventDefault();
							onRemove(requestLine);
						}}>
						<use
							xlinkHref={`${bootstrapIcons}#trash3`}
						/>
					</svg>
					Cancel
				</Link>
			</td>
		</tr>
	);
}

export default RequestLineTableRow;
