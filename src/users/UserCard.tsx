import { User } from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

interface UserCardProps {
	user: User;
	onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
	return (
		<>
			<div
				className="d-flex bg-light gap-4 P-4"
				style={{ width: "25rem" }}>
				<div
					style={{
						width: "6rem",
						height: "6rem",
					}}
					className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2">
					{user.firstname[0]}
					{user.lastname[0]}
				</div>
				<address>
					<div>
						<strong>
							{user.firstname} {user.lastname}
						</strong>
						<Dropdown
							className="d-inline dropdown-toggle"
							aria-expanded="false">
							<Dropdown.Toggle
								variant=""
								className="no-arrow"
								style={{
									background: "none",
								}}>
								{/* <span className="text-primary fw-semibold "> */}
								<svg
									className=" m-2 text-primary no-caret"
									width={30}
									height={20}
									fill="currentColor">
									<use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
								</svg>
								{/* </span> */}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<li>
									<NavLink
										to={`/users/edit/${user.id}`}
										className="dropdown-item">
										Edit
									</NavLink>
								</li>
								<li>
									<a
										className="small dropdown-item"
										onClick={(
											event: SyntheticEvent
										) => {
											event.preventDefault();
											onRemove(user);
										}}>
										Delete
									</a>
								</li>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					{/* <br /> */}

					<div className="text-secondary mb-2">
						{user.isAdmin && "Admin"}{" "}
						{user.isAdmin &&
							user.isReviewer &&
							"| "}
						{user.isReviewer && "Reviewer"}
					</div>
					{/* <br /> */}
					<span className="text-secondary mt-2">
						{user.phone}
					</span>
					{/* <br />
					<div className="d-flex justify-content-start"></div> */}
				</address>
			</div>
		</>
	);
}
export default UserCard;
