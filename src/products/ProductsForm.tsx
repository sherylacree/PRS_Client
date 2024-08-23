import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Product } from "./Products";
import { Vendor } from "../vendors/Vendor";
import { vendorAPI } from "../vendors/VendorAPI";
import { useState } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function ProductForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const productId = Number(id);
	const [vendors, setVendors] = useState<Vendor[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		defaultValues: async () => {
			let vendorList = await vendorAPI.list();
			setVendors(vendorList);

			if (!productId) {
				return Promise.resolve(new Product());
			} else {
				return await productAPI.find(productId);
			}
		},
	});

	const save: SubmitHandler<Product> = async (
		product
	) => {
		try {
			if (product.isNew) {
				await productAPI.post(product);
			} else {
				await productAPI.put(product);
			}
			navigate("/products");
			toast.success("Successfully saved");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div className="bg-light ">
		<form
			className="w-75"
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className=" d-flex">
				<div className="mb-3 w-25">
					<label
						className="form-label"
						htmlFor="partNbr">
						Product Number
					</label>
					<input
						id="partNbr"
						{...register("partNbr", {
							required:
								"Product number is required",
						})}
						className={`form-control ${
							errors.partNbr && "is-invalid"
						} `}
						type="text"
						placeholder="Enter product number"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.partNbr?.message}
					</div>
				</div>

				<div className="mb-3 ms-3 w-50">
					<label
						className="form-label"
						htmlFor="name">
						Product Name
					</label>
					<input
						id="name"
						{...register("name", {
							required:
								"Product Name is required",
						})}
						className={`form-control ${
							errors.name && "is-invalid"
						} `}
						type="text"
						placeholder="Product name"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.name?.message}
					</div>
				</div>
			</div>

			<div className="d-flex">



			<div className="mb-3 ms-2 w-25">
				<label
					className="form-label"
					htmlFor="price">
					Price
				</label>
				<input
					id="price"
					{...register("price", {
						required:
							"Product price is required",
					})}
					className={`form-control ${
						errors.price && "is-invalid"
					} `}
					type="number"
					placeholder="Enter product's price"
					autoFocus
				/>
				<div className="invalid-feedback">
					{errors?.price?.message}
				</div>
			</div>

			<div className="mb-3 mx-2 w-25">
				<label
					className="form-label"
					htmlFor="unit">
					Unit
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
					placeholder="Enter unit"
					autoFocus
				/>
				<div className="invalid-feedback">
					{errors?.unit?.message}
				</div>
			</div>

			<div className="mb-3 me-2 w-25">
				<label
					className="form-label"
					htmlFor="vendor">
					Vendor
				</label>
				<select id="vendor"
					{...register("vendorId", {
						required: "Vendor is required",
					})}
					className={`form-select ${
						errors.vendorId && "is-invalid"
					} `}
					>
					<option value="">Select...</option>
					{vendors.map((vendor) => (
						<option
							key={vendor.id}
							value={vendor.id}>
							{vendor.name}
						</option>
					))}
				</select>
				<div className="invalid-feedback">
					{errors?.vendorId?.message}
				</div>
			</div>
			</div>
			
			
			

			
			
			
			
			<div className="gap-3 d-flex justify-content-end w-75 mt-3">
				<Link
					className="btn btn-outline-primary"
					to={"/products"}>
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#x-circle`}
						/>
					</svg>
					Cancel
				</Link>
				<button
					
					className="btn btn-primary">
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#save-fill`}
						/>
					</svg>
					Save Product
				</button>
			</div>
			
		</form>
		</div>
	);
}

export default ProductForm;
