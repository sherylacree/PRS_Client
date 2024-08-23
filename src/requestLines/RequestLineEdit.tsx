import { Link } from "react-router-dom";
import RequestLineForm from "./RequestLineForm";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";






function RequestLinesEdit() {
	return (
		
			<>
			<div className="d-flex justify-content-between">
			<h3> Edit  Item </h3>
			
			<div className="d-flex gap-2">
				<button className="btn btn-primary me-2">Approve</button>
				<button className="btn btn-outline-danger">Reject</button>
				<Link className="nav-link " to=""> 
				<svg className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use xlinkHref={`${bootstrapIcons}#pencil`} />
					</svg>
				</Link>

			</div>
		</div><hr />
		
		<RequestLineForm /></>

	

	);
}
export default RequestLinesEdit;