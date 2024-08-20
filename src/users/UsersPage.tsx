import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import UserList from "./UserList";






function UserPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h3>Users</h3>
				<Link
					to={"/users/create"}
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
					Add User
				</Link>
			</header>
            <hr />
            <UserList/>
		</>
	);
}
export default UserPage