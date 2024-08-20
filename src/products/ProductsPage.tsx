import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function ProductsPage() {
	return (
		<>
			<header className="d-flex justify-content-between">
				<h3>Products</h3>

				<Link
					to={"/products/create"}
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
					Add Product
				</Link>
			</header>
			<hr />
			<ProductList />
		</>
	);
}

export default ProductsPage;
