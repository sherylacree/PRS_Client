import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import VendorList from "./VendorList";

function VendorsPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h3>Vendors</h3>
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
					Create Vendor
				</Link>
			</header>
            <hr />
			
            <VendorList/>

		
		</>
	);
}

export default VendorsPage;
