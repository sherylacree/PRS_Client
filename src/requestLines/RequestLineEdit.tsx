import RequestLineForm from "./RequestLineForm";


function RequestLineEdit() {
	return (
		<>
		<div className="d-flex justify-content-between p-4">
			<h3> Edit  Item </h3>
			<div>
				<button className="btn btn-primary">Approve</button>
				<button className="btn btn-outline-danger">Reject</button>
				
			</div>
		</div>			
			<hr />
			<RequestLineForm />
		</>
	);
}

export default RequestLineEdit;
