import RequestLineForm from "./RequestLineForm";


function RequestLineEdit() {
	return (
		<>
		<div className="d-flex justify-content-between">
			<h3> Edit  Item </h3>
			<div className="">
				<button className="btn btn-primary me-2">Approve</button>
				<button className="btn btn-outline-danger">Reject</button>
				
			</div>
		</div>			
			<hr />
			<RequestLineForm />
		</>
	);
}

export default RequestLineEdit;
