import { Link } from "react-router-dom";
import { Vendor } from "./Vendor";
import { SyntheticEvent } from "react";

interface VendorCardProps {
	vendor: Vendor;
	onRemove: (vendor: Vendor) => void;
}

export default function VendorCard({
	vendor,
	onRemove,
}: VendorCardProps) {
	return (
		<>
			<div
				className="card p-4 bg-light-subtle"
				key={vendor.id}>
				<strong>{vendor.name}</strong>
				<small>
					<span className="badge text-bg-secondary rounded-pill">
						{vendor.code}
					</span>
				</small>
				<small>{vendor.address}</small>
				<div>
					<small>{vendor.city}, </small>
					<small>
						{vendor.state} {"  "}
					</small>
					<small>{vendor.zip}</small>
				</div>
				<small>{vendor.phone}</small>
				<small>{vendor.email}</small>
				<div className="d-flex gap-2 mt-2">
					<Link to={`/vendors/edit/${vendor.id}`}>
						Edit
					</Link>
					<Link to={"/vendors/delete"}>
						<a
							className="small"
							onClick={(
								event: SyntheticEvent
							) => {
								event.preventDefault();
								onRemove(vendor);
							}}>
							Delete
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
