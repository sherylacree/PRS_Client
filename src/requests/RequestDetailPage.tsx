import { useEffect, useState } from "react";
import {
	Link,
	useNavigate,
	useParams,
	useSearchParams,
} from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import toast from "react-hot-toast";
import { Request } from "./Request";
import { RequestLine } from "../requestLines/RequestLine";
import RequestLineTable from "../requestLines/RequestLineTable";
import { requestLineAPI } from "../requestLines/RequestLineAPI";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function RequestDetailPage() {
	const { requestId: requestIdAsString } = useParams<{
		requestId: string;
	}>();
	let [searchParams] = useSearchParams();
	const requestId = Number(requestIdAsString);
	const [request, setRequest] = useState<Request | undefined>(undefined);
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

	async function removeRequestLine(requestLine: RequestLine) {
		if (confirm("Are you sure you want to delete this item?")) {
			if (requestLine.id) {
				await requestLineAPI.delete(requestLine.id);
				toast.success("Successfully deleted.");
				let updatedRequestLine = request?.requestLines?.filter(
					(l) => l.id !== requestLine.id
				);
				if (request) {
					setRequest({
						...request,
						requestLines: updatedRequestLine,
					} as Request);
				}
			}
		}
	}

	function isDisabled() {
		if (request?.user?.id === request?.userId) {
			return true;
		}
	}

	const navigate = useNavigate();

	async function sendToReview() {
		if (request) {
			await requestAPI.review(request);
			navigate("/requests");
		}
	}

	async function approveRequest() {
		if (request) {
			await requestAPI.approve(request);
			navigate("/requests");
		}
	}

	async function rejectRequest() {
		if (request) {
			await requestAPI.reject(request);
			navigate("/requests");
		}
	}

	if (!request) return null;

	if (!request) return null;

	return (
		<>
			{isDisabled() && request.status === "REVIEW" ? (
				<div
					className="alert alert-warning"
					role="alert">
					You're not allowed to review your own requests.
				</div>
			) : (
				""
			)}

			<nav className="d-flex justify-content-between pe-2">
				<h3>Request</h3>

				<div className="d-flex gap-2">
					{request.status !== "REVIEW" && (
						<Link
							onClick={sendToReview}
							to="/requests"
							className="btn btn-primary me-2">
							Send for review
						</Link>
					)}
					{request.status !== "APPROVE" && (
						<Link
							to="/requests"
							onClick={approveRequest}
							className="btn btn-outline-primary me-2">
						Approve
						</Link>
					)}

					{request.status !== "REJECT" && (
						<Link
							to="/requests"
							onClick={rejectRequest}
							className="btn btn-outline-danger">
							Reject
						</Link>
					)}

					<Link
						className="nav-link "
						to={`/requests/edit/${request.id}`}>
						<svg
							className="bi me-2"
							width={15}
							height={15}
							fill="currentColor">
							<use xlinkHref={`${bootstrapIcons}#pencil`} />
						</svg>
					</Link>
				</div>
			</nav>
			<hr />
			<>
				{busy && (
					<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
						<div
							className=" spinner-border text-primary"
							role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</section>
				)}
				{request && (
					<>
						<section className="card d-flex flex-row gap-5 p-4 w-100 bg-body-tertiary">
							<dl className="">
								<dt>Description</dt>
								<dd>{request.description}</dd>
								<dt>Justification</dt>
								<dd>{request.justification}</dd>
							</dl>
							<dl>
								<dt>Delivery Method</dt>
								<dd>{request.deliveryMode}</dd>
								<dt>Status</dt>
								{/* <dd> */}
									<dd style={{color: "black"}}
										className={`badge ${
											request.status === "NEW" &&
											"text-bg-primary"
										} ${
											request.status === "REJECTED" &&
											"text-bg-danger"
										} ${
											request.status === "APPROVED" &&
											"text-bg-success"
										} ${
											request.status === "REVIEW" &&
											"text-bg-warning"
										}`}>
										{request.status}
									</dd>

									{/* <span className="badge text-bg-primary rounded-pill ">
										{request.status}
									</span> */}
								{/* </dd> */}
							</dl>
							<dd className=""> 
							<dt>Requested By</dt>
							<dd>
								{request?.user?.firstname}{" "}
								{request?.user?.lastname}
							</dd>
							<dl>
								<dt>Total</dt>
								<dd> $ {request.total}</dd>
								<dl />
							</dl>
							</dd>
						</section>

						<section className="p-4 mt-4 w-75">
							<header className="justify-content-start">
								<div className="align-items-start mt-0">
									<RequestLineTable
										request={request}
										onRemove={removeRequestLine}
									/>
								</div>

								<Link
									className="btn btn-outline-primary justify-content-start p-2 mt-4"
									to={`/requests/detail/${request.id}/requestline/create`}>
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
