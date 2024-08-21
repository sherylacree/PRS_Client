import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import RequestTable from "./RequestTable";

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
					Create a request
				</Link>
			</header>
			<hr />

			<select className="justify-content-start w-25 form-select my-4">
				<option value="">All</option>
				<option value="APPROVED">Approveed</option>
				<option value="REJECTED">Rejected</option>
				<option value="NEW">New</option>
				<option value="REVIEW">Review</option>
			</select>
			
			<section className="bg-body-tertiary w-100 p-4">

			<RequestTable />
			</section>
		</>
	);
}

export default RequestsPage;
