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
				className="card p-4"
				key={vendor.id}>
				<strong>{vendor.name}</strong>
				<small>{vendor.code}</small>
				<small>{vendor.id}</small>
				<small>{vendor.address}</small>
				<small>{vendor.city}</small>
				<small>{vendor.state}</small>
				<small>{vendor.zipCode}</small>
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
