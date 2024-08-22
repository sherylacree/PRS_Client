import RequestLineForm from "./RequestLineForm";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function RequestLineCreate() {
	return (
		<>
			<div>
				<h3> New Request </h3>
				<button className="btn btn-primary p-4">
					<svg
						className="bi me-2"
						width={25}
						height={25}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#person-check`}
						/>
					</svg>
					Submit for review
				</button>
				<div className="p-4">
					<svg
						className="bi me-2"
						width={25}
						height={25}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#pencil`}
						/>
					</svg>
				</div>
			</div>
			<hr />
			<RequestLineForm />
		</>
	);
}
export default RequestLineCreate;
