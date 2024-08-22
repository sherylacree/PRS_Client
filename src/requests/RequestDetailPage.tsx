import { useEffect, useState } from "react";
import {
	Link,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";

import { Request } from "./Request";


function RequestDetailPage() {
	const { requestId: requestIdAsString } = useParams<{
		requestId: string;
	}>();
	let [searchParams] = useSearchParams();
	const requestId = Number(requestIdAsString);
	const [request, setRequest] = useState<
		Request | undefined
	>(undefined);
	const [busy, setBusy] = useState(false);

	async function loadRequest() {
		try {
			if (!requestId) return;
			setBusy(true);
			const data = await requestAPI.find(requestId);
			setRequest(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequest();
	}, [searchParams.get("lastUpdated")]);



	if (!request) return null;

	return (
		<>
			<nav className="d-flex justify-content-between pe-2">
				<h4>Request</h4>
				<Link
					to={`/requests/edit/${request.id}`}
					className="btn btn-outline-primary">
					edit request
				</Link>
			</nav>
			<hr />
			<>
				{busy && (
					<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
						<div
							className=" spinner-border text-primary"
							role="status">
							<span className="visually-hidden">
								Loading...
							</span>
						</div>
					</section>
				)}
				{request && (
					<>
						<section className="card d-flex flex-row gap-5 p-4 w-100 bg-body-tertiary">
							<dl className="">
								<dt>Description</dt>
								<dd>
									{request.description}
								</dd>
								<dt>Justification</dt>
								<dd>
									{request.justification}
								</dd>
							</dl>
							<dl>
								<dt>Delivery Method</dt>
								<dd>
									{request.deliveryMode}
								</dd>

								<dt>Status</dt>
								<dd>
									<span className="badge text-bg-secondary rounded-pill ">
										{request.status}
									</span>
								</dd>
							</dl>
							<dl>
								<dt>Requested By</dt>
								<dd>
									{
										request?.user
											?.firstname
									}{" "}
									{
										request?.user
											?.lastname
									}
								</dd>
							</dl>
						</section>

						<section className="card p-4 mt-4 w-100">
							<header className="justify-content-start">
								<h5>Items</h5>

								<hr />
                                <div className="align-items-start">add table here</div>            
                                
                            

                                <hr />

								<Link
									className="btn btn-outline-primary justify-content-start p-2"
									to={`/requests/detail/${request.id}/product/create`}>
									+ add line
								</Link>
							</header>

							
						</section>

					</>
				)}
			</>
		</>
	);
}

export default RequestDetailPage;
