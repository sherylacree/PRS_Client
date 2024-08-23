// import { useEffect, useState } from "react";
// import {Link,useParams,	useSearchParams,} from "react-router-dom";
// import toast from "react-hot-toast";
// import { RequestLine } from "../requestLines/RequestLine";
// import { requestLineAPI } from "../requestLines/RequestLineAPI";
// import RequestForm from "../requests/RequestsForm";
// import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
// import { requestAPI } from "../requests/RequestAPI";



// function RequestDetailPage() {
// 	const { requestId: requestIdAsString } = useParams<{
// 		requestId: string;
// 	}>();
// 	let [searchParams] = useSearchParams();
// 	const requestId = Number(requestIdAsString);
// 	const [request, setRequest] = useState<
// 		Request | undefined
// 	>(undefined);
// 	const [busy, setBusy] = useState(false);

// 	async function loadRequest() {
// 		try {
// 			if (!requestId) return;
// 			setBusy(true);
// 			const data = await requestAPI.find(requestId);
// 			setRequest(data);
// 		} catch (error: any) {
// 			toast.error(error.message);
// 		} finally {
// 			setBusy(false);
// 		}
// 	}

// 	useEffect(() => {
// 		loadRequest();
// 	}, [searchParams.get("lastUpdated")]);	


// 	if (!request) return null;

//     	return (
//             <><>

//                 <div className="d-flex justify-content-between">

//                     <h3>Requests</h3>
//                     <div className="gap-2">

//                         <button className="btn btn-primary me-2">Approve</button>
//                         <button className="btn btn-outline-danger">Reject</button>
//                         <Link
//                             className="nav-link "
//                             to={`./requests/edit/${request.id}`}>
//                             <svg
//                                 className="bi me-2"
//                                 width={15}
//                                 height={15}
//                                 fill="currentColor">
//                                 <use xlinkHref={`${bootstrapIcons}#pencil`} />
//                             </svg>
//                         </Link>
//                     </div>

//                 </div>

//                 <hr />


//                 <RequestForm />
                
//                 </><RequestDetailPage /></>


//     );
// }

