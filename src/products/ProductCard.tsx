import { Link } from "react-router-dom";
import { Product } from "./Products";
import { SyntheticEvent } from "react";
import "../App";

interface ProductsCardProps {
	product: Product;
	onRemove: (product: Product) => void;
}
function ProductCard({
	product,
	onRemove,
}: ProductsCardProps) {
	return (
		<>
			<div
				className="card p-4 ms-4 mt-4 vh-25"
				key={product.id}>
				<strong>{product.name}</strong>

				<div>{product.price}</div>
				<small>
					{"/"} {product.unit}
				</small>
				<small>{product.unit}</small>
				<small>{product.vendorId}</small>
				<small>
					<span className="badge text-bg-secondary rounded-pill">
						{product.partNbr}
					</span>
				</small>
				<div className="d-flex gap-2 mt-2">
					<Link
						to={`/products/edit/${product.id}`}>
						Edit
					</Link>
					<Link
						to={"/products/delete"}
						className="small"
						onClick={(
							event: SyntheticEvent
						) => {
							event.preventDefault();
							onRemove(product);
						}}>
						Delete
					</Link>
				</div>
			</div>
		</>
	);
}
export default ProductCard;
