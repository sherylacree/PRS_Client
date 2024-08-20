import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import UserList from "./UserList";






function UserPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h3>Users</h3>
				<Link
					to={"/vendors/create"}
					role="button"
					className="btn btn-primary">
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#plus-circle-fill`}
						/>
					</svg>
					Create User
				</Link>
			</header>
            <hr />
            <UserList/>
		</>
	);
}
export default UserPage