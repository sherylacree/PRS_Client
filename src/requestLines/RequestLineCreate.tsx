
import RequestLineForm from "./RequestLineForm";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function RequestLineCreate() {
	return (
		<>
			<div>
				<div className="d-flex justify-content-between">
					<h3> New Request Item</h3>

					<div className="d-flex">
						

						<button className="btn btn-primary py-2 ">
							<svg
								className="bi me-2"
								width={20}
								height={15}
								fill="currentColor">
								<use
									xlinkHref={`${bootstrapIcons}#person-check`}
								/>
							</svg>
							Submit for review
						</button>

						<div className="p-4">
							{/* <Link
								type="button"
								className="btn btn-link"
								
								// to={`/requests/detail/${request.id}/requestlines/edit`} 
								>

								<svg
									className="bi me-2"
									width={25}
									height={25}
									fill="currentColor">
									<use
										xlinkHref={`${bootstrapIcons}#pencil`}
									/>
								</svg>
							</Link> */}
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="w-100">
				<RequestLineForm />
			</div>
		</>
	);
}
export default RequestLineCreate;
