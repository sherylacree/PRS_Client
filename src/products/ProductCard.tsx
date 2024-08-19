import { Link } from "react-router-dom";
import { Product } from "./Products";
import { SyntheticEvent } from "react";

interface ProductsCardProps {
	product: Product;
	onRemove: (product: Product) => void;
}

export default function ProductsCard({
	product,
	onRemove,
}: ProductsCardProps) {
	return (
		<>
			<div
				className="card p-4"
				key={product.id}>
				<strong>{product.partNbr}</strong>
				<small>{product.name}</small>
				<small>{product.price}</small>
				<small>{product.unit}</small>
				<small>{product.vendorId}</small>
				<div className="d-flex gap-2 mt-2">
					<Link
						to={`/products/edit/${product.id}`}>
						Edit
					</Link>
					<Link to={"/products/delete"}>
						<a
							className="small"
							onClick={(
								event: SyntheticEvent
							) => {
								event.preventDefault();
								onRemove(product);
							}}>
							Delete
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}
