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
				className="card p-4 ms-4 mt-4"
				key={product.id}>
				<strong>{product.name}</strong>
				<div className="d-flex">
					<div>
						{"$"} {product.price}
					</div>
					<div>
						{"/"} {product.unit}
					</div>
				</div>
				<div className="mt-5">{product.vendor?.name}</div>
							<small>
					<span className="badge text-bg-primary rounded-pill ">
						{product.partNbr}
					</span>
				</small>
				<div className="d-flex gap-2 mt-4">
					<Link
						to={`/products/edit/${product.id}`}>
						Edit
					</Link>
					<Link
						to={"/products/delete"}
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
