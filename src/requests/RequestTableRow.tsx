import { Link } from "react-router-dom";
import  { Request} from "./Requests";
import { SyntheticEvent } from "react";

interface RequestTableRowProps {
  request: Request;
  onRemove: (request: Request) => void;
}

function RequestTableRow({ request, onRemove }: RequestTableRowProps) {
  return (
    <tr>
      <td>
        <Link to={`/requests/detail/${request.id}`}>{request.description}</Link>
      </td>
      <td>
        {request.justification} 
      </td>
      <td>{request.status}</td>
      <td>{request.total}</td>
      <td>
        ${request.deliveryMode} 
      </td>
      <td>
        <div className="d-flex gap-2">
          <Link className="small" to={`/requests/edit/${request.id}`}>
            edit
          </Link>
          |
          <a
            className="small"
            onClick={(event: SyntheticEvent) => {
              event.preventDefault();
              onRemove(request);
            }}
          >
            delete
          </a>
        </div>
      </td>
    </tr>
  );
}

export default RequestTableRow;
