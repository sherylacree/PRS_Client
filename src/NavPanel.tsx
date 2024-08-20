import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { NavLink } from "react-router-dom";

function NavPanel() {
	return (
		<nav
			className="bg-light px-4 mh-100 justify-content-center pt-4"
			style={{ width: "15rem" }}>
			<ul className="nav-pills nav d-flex flex-column align-content-left w-100 list-inline">
				<a
					className="text-decoration-none"
					href="newrequests.html">
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#plus-circle-fill`}
						/>
					</svg>
					Create New
				</a>
				<li className="pt-4 fw-bold mx-4 ">
					Purchase
				</li>
				<li className="nav-item pt-4 pb-2">
					<NavLink
						className="nav-link"
						to="/requests">
						<svg
							className="bi me-2"
							width={25}
							height={25}
							fill="currentColor">
							<use
								xlinkHref={`${bootstrapIcons}#cart`}
							/>
						</svg>
						Request
					</NavLink>
				</li>
				<li className="nav-item pt-4">
					<NavLink
						className="nav-link"
						to="/products">
						<svg
							className="bi me-2"
							width={25}
							height={25}
							fill="currentColor">
							<use
								xlinkHref={`${bootstrapIcons}#grid`}
							/>
						</svg>
						Products
					</NavLink>
				</li>
				<li className="nav-item pt-4">
					<NavLink
						to="/vendors"
						className="nav-link">
						<svg
							className="bi me-2"
							width={25}
							height={25}
							fill="currentColor">
							<use
								xlinkHref={`${bootstrapIcons}#building`}
							/>
						</svg>
						Vendors
					</NavLink>
				</li>
				<li className="nav-item pt-4">
					<NavLink
						className="nav-link"
						to="/users">
						<svg
							className="bi me-2"
							width={25}
							height={25}
							fill="currentColor">
							<use
								xlinkHref={`${bootstrapIcons}#people`}
							/>
						</svg>
						Users
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavPanel;
