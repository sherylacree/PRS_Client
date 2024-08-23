import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import { User } from "./User";
import toast from "react-hot-toast";
import { userAPI } from "./UserAPI";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function UserForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const userId = Number(id);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		defaultValues: async () => {
			if (!userId) {
				return Promise.resolve(new User());
			} else {
				return await userAPI.find(userId);
			}
		},
	});

	const save: SubmitHandler<User> = async (
		user: User
	) => {
		try {
			if (user.isNew) {
				await userAPI.post(user);
			} else {
				await userAPI.put(user);
			}
			navigate("/users");
			toast.success("Successfully saved");
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		
		<form
			className="w-100 vh-100 bg-light p-4  "
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className="d-flex flex-row justify-content-start w-100">
				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="username">
						Username
					</label>
					<input
						id="username"
						{...register("username", {
							required:
								"Username Name is required",
						})}
						className={`form-control ${
							errors.username && "is-invalid"
						} `}
						type="text"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.username?.message}
					</div>
				</div>

				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="password">
						Password
					</label>
					<input
						id="password"
						{...register("password", {
							required:
								"Password is required",
						})}
						className={`form-control ${
							errors.password && "is-invalid"
						} `}
						type="text"
					/>
					<div className="invalid-feedback">
						{errors?.password?.message}
					</div>
				</div>
			</div>

			<div className="d-flex flex-row justify-content-start">
				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="firstname">
						First name
					</label>
					<input
						id="firstname"
						{...register("firstname", {
							required:
								"Your first name is required",
						})}
						className={`form-control ${
							errors.firstname && "is-invalid"
						} `}
						type="text"
					/>
				</div>
				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="lastname">
						Last name
					</label>
					<input
						id="lastname"
						{...register("lastname", {
							required:
								"Your last name is required",
						})}
						className={`form-control ${
							errors.lastname && "is-invalid"
						} `}
						type="text"
					/>
					<div className="invalid-feedback">
						{errors?.lastname?.message}
					</div>
				</div>
			</div>
			<div className="d-flex flex-row justify-content-start">	
			<div className="mb-3 mx-2 w-50">
				<label
					className="form-label"
					htmlFor="phone">
					Phone
				</label>
				<input
					id="phone"
					{...register("phone")}					
					className="form-control"				
					type="text"
				/>
				
			</div>

			<div className="mb-3 mx-2 w-50">
				<label
					className="form-label"
					htmlFor="email">
					Email
				</label>
				<input
					id="email"
					{...register("email")}
					className="form-control"
					type="text"
				/>
				
			</div>
				</div>
<div className="mx-3">Role</div>
			<div className="mx-3 mt-2">
				
				<input
					type="checkbox"
					id="isAdmin"
					className="form-check-input"
					{...register("isAdmin")}
				/>
				<label
					htmlFor="isAdmin"
					className="mx-2">
					Admin
				</label>
				<input
					type="checkbox"
					id="isReviewer"
					className="form-check-input"
					{...register("isReviewer")}
				/>
				<label
					htmlFor="isReviewer"
					className="mx-2">
					{" "}
					Reviewer
				</label>
			</div>
			<div className="d-flex gap-2 justify-content-end">
				
				<Link
					className="btn btn-outline-primary"
					to={"/users"}>
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
					// type="form-check"
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
					Save User
				</button>
			</div>
			
		</form>
	);
}

export default UserForm;
