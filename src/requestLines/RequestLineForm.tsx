import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Product } from "../products/Products";
import { useState } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { RequestLine } from "./RequestLine";
import { productAPI } from "../products/ProductAPI";
import { requestLineAPI } from "./RequestLineAPI";

function RequestLineForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const requestId = Number(id);
	const { requestLineId: requestLineIdAsString } = useParams<{
		requestLineId: string;
	}>();
	const requestLineId = Number(requestLineIdAsString);
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
				return Promise.resolve(
					new RequestLine({ requestId: requestId })
				);
			} else {
				return await requestLineAPI.find(requestLineId);
			}
		},
	});

	const save: SubmitHandler<RequestLine> = async (
		requestLine: RequestLine
	) => {
		try {
			if (requestLine.isNew) {
				let newRequestLine = await requestLineAPI.post(requestLine);
				navigate(`/requests/detail/${newRequestLine.requestId}`);
			} else {
				await requestLineAPI.put(requestLine);
				navigate(`/requests/detail/${requestLine.requestId}`);
			}
			toast.success("Successfully saved");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div className="bg-light">
			<form
				className="w-50  card ms-4 "
				onSubmit={handleSubmit(save)}
				noValidate>
				<div className="p-2 w-100 ">
					<h4 className="p-4 ">
						<strong>Item</strong>
					</h4>
					<div className="p-2 m-2 w-100">
						<label
							className="form-label"
							htmlFor="product">
							Product
						</label>
						<select
							id="product"
							{...register("productId", {
								required: "Product is required",
								valueAsNumber: true,
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

					<div className="w-100 justify-content-start">
						<div className="p-2 ms-2 mt-4 mb-4 w-100 justify-content-start">
							<label
								className="form-label"
								htmlFor="quantity">
								Quantity
							</label>
							<input
								id="quantity"
								{...register("quantity", {
									required: "Quantity is required",
									valueAsNumber: true,
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

						
						</div>

						<div className="d-flex gap-2 justify-content-end">
							<Link
								to={`/requests/detail/${requestId}`}
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
							</Link>
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
								Save Item
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RequestLineForm;
