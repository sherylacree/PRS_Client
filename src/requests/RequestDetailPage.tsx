import { useEffect } from "react";
import {
    Link,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { requestAPI } from "./RequestAPI";
import {Request} from "./Requests";


function RequestDetailPage() {
  const { requestId: requestIdAsString } = useParams<{
    requestId: string;
  }>();
  let [searchParams, ] = useSearchParams();
  const requestId = Number(requestIdAsString);


  async function loadRequests() {
    setBusy(true);
    let data = await requestAPI.list();
    setRequests(data);
    setBusy(false);
}
useEffect(() => {
    loadRequests();
}, [searchParams.get("lastUpdated")]); 


  


  return (
    <>
      <nav className="d-flex justify-content-between pe-2">
        <h4>Request</h4>
        <Link
          to={`/requests/edit/${Request.id}`}
          className="btn btn-outline-primary"
        >
          edit request
        </Link>
      </nav>
      <hr />
      <>
        {busy && (
          <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
            <div className=" spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </section>
        )}
        {request && (
          <>
            <section className="card d-flex flex-row gap-5 p-4 w-100 bg-body-tertiary">
              <dl className="">
              <dt>Request ID number</dt>
              <dd>{request.id}</dd>
                <dt>Description</dt>
                <dd>{request.description}</dd>
                <dt>Justification</dt>
                <dd>{request.justification}</dd>
              </dl>
              <dl>
                <dt>Status</dt>
                <dd>{request.status}</dd>
                <dt>Delivery Method</dt>
                <dd>{request.deliveryMode}</dd>
              </dl>
              <dl>
                <dt>Rejection Reason</dt>
                <dd>{request.rejectionReason}</dd>
                <dt>User</dt>
                <dd>
                  ${request.user?.firstname}{" "}
                  {request.user?.lastname}
                </dd>
              </dl>
            </section>
            <section className="card p-4 mt-4 w-100">
              <header className="d-flex justify-content-between">
                           <Link
                  className="btn btn-outline-primary"
                  to={`/requests/detail/${request.id}/user/create`}
                >
                  + add user
                </Link>
              </header>
            
              <Routes>
                <Route path="user/create" element={<UserCreate />} />
                <Route
                  path="credit/edit/:creditId"
                  element={<UsersEdit />}
                />
              </Routes>
            </section>
          </>
        )}
      </>
    </>
  );


export default RequestDetailPage;


