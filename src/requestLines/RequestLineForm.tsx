import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { Product } from "../products/Products";

import { useState } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { RequestLine } from "./RequestLine";

import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "./RequestLIneAPI";

function RequestLineForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const requestLineId = Number(id);
	const [products, setProducts] = useState<Product[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestLine>({
		defaultValues: async () => {
			let productList = await productAPI.list();
			setProducts(productList);

			if (!requestLineId) {
				return Promise.resolve(new RequestLine());
			} else {
				return await requestLineAPI.find(
					requestLineId
				);
			}
		},
	});

	const save: SubmitHandler<RequestLine> = async (
		requestLines
	) => {
		try {
			if (requestLines.isNew) {
				await requestLineAPI.post(requestLines);
			} else {
				await requestLineAPI.put(requestLines);
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
				<h4 className="p-4 m-2 justify-content-start">
					<strong>Items</strong>
				</h4>
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
								{product?.name}
							</option>
						))}
					</select>
					<div className="invalid-feedback">
						{errors?.productId?.message}
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
								errors.quantity &&
								"is-invalid"
							} `}
							type="number"
							autoFocus
						/>
						<div className="invalid-feedback">
							{errors?.quantity?.message}
						</div>

						<label htmlFor="amount">
							Amount
						</label>
						{/* <div>
							
							{(requestLines.product?.price) *
								(requestLine.quantity)}
						</div> */}
					</div>

					<div className="d-flex gap-2 justify-content-end">
						<button
							className="btn btn-outline-primary">
							
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
			</div>
		</form>
	);
}

export default RequestLineForm;
