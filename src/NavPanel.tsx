import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";

function NavPanel() {
	return (
		<nav
			className="bg-light px-4 mh-100 justify-content-center pt-4"
			style={{ width: "15rem" }}>
			<ul className="d-flex flex-column align-content-left w-100 list-inline">
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
					<Link
						className="text-decoration-none"
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
					</Link>
				</li>
				<li className="nav-item pt-4">
					<Link
						className="text-decoration-none"
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
					</Link>
				</li>
				<li className="nav-item pt-4">
					<Link
						to="/vendors"
						className="nav-item pt-4">
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
					</Link>
				</li>
				<li className="nav-item pt-4">
					<Link
						className="text-decoration-none"
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
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavPanel;
