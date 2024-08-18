import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import UserList from "./UserList";






function UserPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h4>Users</h4>
				<Link
					to={"/user/create"}
					role="button"
					className="btn btn-outline-secondary">
					<svg
						className="bi me-2"
						width="15"
						height="15"
						fill="current color">
						<use
							xlinkHref={`${bootstrapIcons}#plus-circle-fill`}></use>
					</svg>{" "}
					Add Vendor
				</Link>
			</header>
            <hr />
            <UserList/>
		</>
	);
}
export default UserPage