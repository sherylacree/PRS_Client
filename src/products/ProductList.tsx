import { useEffect, useState } from "react";
import { Product } from "./Products";
import { productAPI } from "./ProductAPI";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadProducts() {
		setBusy(true);
		let data = await productAPI.list();
		setProducts(data);
		setBusy(false);
	}
	useEffect(() => {
		loadProducts();
	}, []);

	async function remove(product: Product) {
		if (
			confirm(
				"Are you sure you want to delete this Product?"
			)
		) {
			if (product.id) {
				await productAPI.delete(product.id);
				let updatedProducts = products.filter(
					(v) => v.id !== product.id
				);
				setProducts(updatedProducts);
				toast.success("Successfully deleted.");
			}
		}
	}

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

			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onRemove={remove}
				/>
			))}
		</section>
	);
}
export default ProductList;
