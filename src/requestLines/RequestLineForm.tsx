import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Product } from "./Products";

import { useState } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { RequestLines } from "./RequestLine";
import { requestLinesAPI } from "./RequestLIneAPI";

function RequestLineForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const productId = Number(id);
	const requestId = Number(id);
	const [products, setProducts] = useState<Product[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestLines>({
		defaultValues: async () => {
			let productList = await productAPI.list();
			setProducts(productList);

			if (!RequestLineId) {
				return Promise.resolve(new RequestLines());
			} else {
				return await requestLinesAPI.find(
					RequestLineId
				);
			}
		},
	});

	const save: SubmitHandler<RequestLines> = async (
		requestLines
	) => {
		try {
			if (requestLines.isNew) {
				await requestLinesAPI.post(requestLines);
			} else {
				await requestLinesAPI.put(requestLines);
			}
			navigate("/requestLines");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<form
			className="w-100 card mt-5"
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className="p-4 m-2 w-100 justify-content-start">
				<h4 className="p-4 m-2"><strong>Item</strong></h4>
			<div className="p-4 m-2 w-100">
				<label
				className="form-label"
				htmlFor="product">
				Product
				</label>
					<select
						id="product"
						{...register("productId", {
							required: "Product is required",
						})}
						className={`form-select ${
							errors.productId && "is-invalid"
						} `}>
						<option value="">Select...</option>
						{products.map((product) => (
							<option
								key={product.id}
								value={product.id}>
								{product.name}
							</option>
						))}
					</select>
					<div className="invalid-feedback">
						{errors?.productId?.message}
					</div>
				</div>

				<div className="p-4 m-2">
					<h6>Price</h6>
					<h6> {RequestLines?.products?.price}</h6>
				</div>

				<div className="mb-3 mx-2 w-75">
					<label
						className="form-label"
						htmlFor="product">
						Product Name
					</label>
					<input
						id="product"
						{...register("product", {
							required:
								"Product Name is required",
						})}
						className={`form-control ${
							errors.product && "is-invalid"
						} `}
						type="text"
						placeholder="Product name"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.product?.message}
					</div>
				</div>
			</div>

			<div className="w-100 d-flex justify content-start">
				<div className="mb-3 ms-2 w-25">
					<label
						className="form-label"
						htmlFor="price">
						Price
					</label>
					<div> ${requestLines?.product?.price}</div>
					
					
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

				<div className="mb-3 me-2 w-50">
					<label
						className="form-label"
						htmlFor="vendor">
						Vendor
					</label>
					<select
						id="vendor"
						{...register("vendorId", {
							required: "Vendor is required",
						})}
						className={`form-select ${
							errors.vendorId && "is-invalid"
						} `}>
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

			<div className="w-100 d-flex justify-content-start">

			
			<div className="p-4 m-2 w-100 justify-content-start">
					<label
						className="form-label"
						htmlFor="quantity">
						Quantity
					</label>
					<input
						id="quantity"
						defaultValue={0}
						{...register("quantity", {
							required:
								"Quantity is required",
						})}
						className={`form-control ${
							errors.quantity && "is-invalid"
						} `}
						type="number"						
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.quantity?.message}
					</div>
					<label htmlFor="amount">Amount</label>
					<div> {(requestLines?.product?.price) * (requestLines.quantity)}</div>
				</div>
				


			<div className="d-flex gap-2 justify-content-end">
				<button
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
				</button>
				<button className="btn btn-primary">
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
			</div>
		</form>
	);
}

export default RequestLineForm;
