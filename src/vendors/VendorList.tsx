import { useEffect, useState } from "react";
import { Vendor } from "./vendor";
import { vendorAPI } from "./VendorAPI";

function VendorList() {
	const [vendors, setVendors] = useState<Vendor[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadVendors() {
		setBusy(true);
		let data = await vendorAPI.list();
		setVendors(data);
		setBusy(false);
	}
	useEffect(() => {
		loadVendors();
	}, []);

	return (
		<section className="d-flex flex-wrap gap-4">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div
						className="spinner-border"
						role="status">
						<span className="visually-hidden">
							Loading . . .{" "}
						</span>
					</div>
				</div>
			)}

			{vendors.map((vendor) => (
				<div className="card p-4" key={vendor.id}>
					<strong>{vendor.name}</strong>
					<small>{vendor.code}</small>
					<small>{vendor.id}</small>
					<small>{vendor.address}</small>
					<small>{vendor.city}</small>
					<small>{vendor.state}</small>
					<small>{vendor.zipCode}</small>
					<small>{vendor.phone}</small>
					<small>{vendor.email}</small>
				</div>
			))}
		</section>
	);
}
export default VendorList;
