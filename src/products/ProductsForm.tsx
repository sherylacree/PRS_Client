import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Product } from "./Products";


function ProductForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const productId = Number(id);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		defaultValues: async () => {
			if (!productId) {
				return Promise.resolve(new Product());
			} else {
				return await productAPI.find(productId);
			}
		},
	});

	const save: SubmitHandler<Product> = async (
		product: Product
	) => {
		try {
			if (product.isNew) {
				await productAPI.post(product);
			} else {
				await productAPI.put(product);
			}
			navigate("/products");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<form
			className="w-50"
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="name">
					Product Name
				</label>
				<input
					id="name"
					{...register("name", {
						required: "Product Name is required",
					})}
					className={`form-control ${
						errors.name && "is-invalid"
					} `}
					type="text"
					autoFocus
				/>
				<div className="invalid-feedback">
					{errors?.name?.message}
				</div>
			</div>

			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="price">
					Address
				</label>
				<input
					id="price"
					{...register("price", {
						required: "Price is required",
					})}
					className={`form-control ${
						errors.price && "is-invalid"
					} `}
					type="text"
				/>
				<div className="invalid-feedback">
					{errors?.price?.message}
				</div>
			</div>
			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="unit">
					City
				</label>
				<input
					id="unit"
					{...register("unit", {
						required: "Unit is required",
					})}
					className={`form-control ${
						errors.unit && "is-invalid"
					} `}
					type="text"
				/>
				<div className="invalid-feedback">
					{errors?.unit?.message}
				</div>
			</div>
			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="vendorId">
					Vendor
				</label>
				<select
					{...register("vendorId", {
						required: "Vendor is required",
					})}
					className={`form-select ${
						errors.vendorId && "is-invalid"
					} `}
					id="vendorId">
					<option value="">Select...</option>
				
				</select>
				<div className="invalid-feedback">
					{errors?.vendorId?.message}
				</div>
			</div>
			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="partNbr">
					Part Number
				</label>
				<input
					id="partNbr"
					{...register("partNbr", {
						required: "Part Number is required",
					})}
					className={`form-control ${
						errors.partNbr && "is-invalid"
					} `}
					type="text"
				/>
				<div className="invalid-feedback">
					{errors?.partNbr?.message}
				</div>
			</div>

		
			<div className="d-flex gap-2">
				<button
					type="submit"
					className="btn btn-outline-primary">
					Save
				</button>
				<Link
					className="btn btn-outline-secondary"
					to={"/products"}>
					Cancel
				</Link>
			</div>
		</form>
	);
}

export default ProductForm;
