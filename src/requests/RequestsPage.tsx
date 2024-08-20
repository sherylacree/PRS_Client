import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import RequestTable from "./RequestTable";
import RequestList from "./RequestList";

function RequestsPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h3>Requests</h3>

				<Link
					to={"/requests/create"}
					role="button"
					className="btn btn-primary">
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#plus-circle-fill`}
						/>
					</svg>
					Add Request
				</Link>
			
			</header>
			<hr />
			<RequestTable />
			<RequestList/>
			
		</>
	);
}

export default RequestsPage;
