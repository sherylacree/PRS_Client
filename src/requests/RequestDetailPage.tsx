import { useEffect, useState } from "react";
import {
	Link,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";

import { Request } from "./Request";

import RequestLineTable from "../requestLines/RequestLineTable";


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
				<h3>Request</h3>
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

						<section className="p-4 mt-4 w-75">
							<header className="justify-content-start">
								
                                <div className="align-items-start mt-0">
									
									<RequestLineTable requestLines={request.requestLines}/>
								</div>            
                                
                            

                                

								<Link
									className="btn btn-outline-primary justify-content-start p-2 mt-4"
									to={`/requests/detail/${request.id}`}>
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
