import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";
import { User } from "../users/User";
import { userAPI } from "../users/UserAPI";
import { useState } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function RequestForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const requestId = Number(id);
	const [users, setUsers] = useState<User[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Request>({
		defaultValues: async () => {
			let userList = await userAPI.list();
			setUsers(userList);

			if (!requestId) {
				return Promise.resolve(new Request({ userId: 911 }));
			} else {
				return await requestAPI.find(requestId);
			}
		},
	});

	const save: SubmitHandler<Request> = async (request) => {
		try {
			if (request.isNew) {
				let newRequest = await requestAPI.post(request);
				navigate(`/requests/detail/${newRequest.id}`);
			} else {
				await requestAPI.put(request);
				navigate(`/requests/detail/${request.id}`);
			}
			toast.success("Successfully saved");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	

	return (
		
		<div className="bg-light">
		<form
			className="w-100"
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className="w-100 d-flex">
				<div className="w-50">
					<div className="w-100 mb-4 mt-2">
						<label
							className="form-label"
							htmlFor="description">
							Description
						</label>
						<input
							id="description"
							{...register("description", {
								required: "Description is required",
							})}
							className={`form-control ${
								errors.description && "is-invalid"
							} `}
							type="text"
							placeholder="Enter a description"
							autoFocus
						/>
						<div className="invalid-feedback">
							{errors?.description?.message}
						</div>
					</div>

					<div className="w-100">
						<label
							className="form-label"
							htmlFor="justification">
							Justification
						</label>
						<input
							id="justification"
							{...register("justification", {
								required: "Justification is required",
							})}
							className={`form-control ${
								errors.justification && "is-invalid"
							} `}
							type="text"
							placeholder="Enter your justification"
							autoFocus
						/>
						<div className="invalid-feedback">
							{errors?.justification?.message}
						</div>
					</div>
				</div>
				<div className="w-75 d-flex ms-5 align-content-end mt-2">
					<div className="w-100">
						<div className="mb-4 ms-5 w-50">
							<label
								className="form-label"
								htmlFor="deliveryMode">
								Delivery Method
							</label>
							<select
								{...register("deliveryMode", {
									required: "Delivery Method is required",
								})}
								className={`form-select ${
									errors.deliveryMode && "is-invalid"
								} `}
								id="deliveryMode">
								<option value="">Select...</option>
								<option value="PICKUP">Pick up</option>
								<option value="DELIVERY">Delivery</option>
								<option value="SIGNATUREDELIVERY">
									Signature Delivery
								</option>
							</select>
							<div className="invalid-feedback">
								{errors?.deliveryMode?.message}
							</div>
						</div>

						<div className="mb-4 ms-5 w-50">
							<label
								className="form-label"
								htmlFor="status">
								Status
							</label>

							{/* function RequestForm({isEditMode=false, register, errors}) {
								return( */}

							<select
								{...register("status", {
									required: "Set Status is Required",
								})}
								className={`form-select ${
									errors.status && "is-invalid"
								} `}
								id="status"
								defaultValue="New"
								>
								<option value="">Select...</option>
								<option value="New">New</option>
								<option value="Review">Review</option>
								<option value="Approved">Approved</option>
								<option value="Rejected">Rejected</option>
							</select>
						</div>

						<div className="ms-5 w-50">
							<label
								className="form-label"
								htmlFor="user">
								Select User
							</label>
							<select
								id="user"
								{...register("userId", {
									required: "User is required",
								})}
								className={`form-select ${
									errors.userId && "is-invalid"
								} `}>
								<option value="">Select...</option>
								{users.map((user) => (
									<option
										key={user.id}
										value={user.id}>
										{user?.firstname} {user?.lastname}
									</option>
								))}
							</select>
							<div className="invalid-feedback">
								{errors?.userId?.message}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="d-flex gap-4 w-75 mt-4 me-5 justify-content-end">
				<Link
					className="btn btn-outline-primary"
					to={"/requests"}>
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use xlinkHref={`${bootstrapIcons}#x-circle`} />
					</svg>
					Cancel
				</Link>
				<button className="btn btn-primary">
					<svg
						className="bi me-2"
						width={15}
						height={15}
						fill="currentColor">
						<use xlinkHref={`${bootstrapIcons}#save-fill`} />
					</svg>
					Save Request
				</button>
			</div>
		</form>
		</div>
	);
}

export default RequestForm;
