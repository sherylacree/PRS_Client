import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import VendorList from "./VendorList";

function VendorsPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h4>Vendors</h4>
				<Link
					to={"/vendors/create"}
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
            <VendorList/>
		</>
	);
}

export default VendorsPage;
