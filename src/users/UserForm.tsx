import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import { User } from "./User";
import toast from "react-hot-toast";
import { userAPI } from "./UserAPI";

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
					htmlFor="password">
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

			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="password">
					Address
				</label>
				<input
					id="password"
					{...register("password", {
						required: "Password is required",
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
			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="password">
					Password
				</label>
				<input
					id="password"
					{...register("password", {
						required: "Password is required",
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
			<div className="mb-3">
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
			<div className="mb-3">
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

			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="phone">
					Phone
				</label>
				<input
					id="phone"
					{...register("phone", {
						required:
							"Pleae provide phone number",
					})}
					className={`form-control ${
						errors.phone && "is-invalid"
					} `}
					type="text"
				/>
				<div className="invalid-feedback">
					{errors?.phone?.message}
				</div>
			</div>

			<div className="mb-3">
				<label
					className="form-label"
					htmlFor="email">
					Email
				</label>
				<input
					id="email"
					{...register("email", {
						required: "Please provide an email",
					})}
					className={`form-control ${
						errors.email && "is-invalid"
					} `}
					type="text"
				/>
				<div className="invalid-feedback">
					{errors?.email?.message}
				</div>
			</div>

		
			<div>
				<input
					type="checkbox"
					id="isAdmin"
					className="form-check-input"
					{...register("isAdmin")}
				/>
				<label htmlFor="isAdmin">Admin</label>
				<input
					type="checkbox"
					id="isReviewer"
					className="form-check-input"
					{...register("isReviewer")}
				/>
				<label htmlFor="isReviewer">Reviewer</label>
			</div>

			<div className="d-flex gap-2">
				<button
					type="submit"
					className="btn btn-outline-primary">
					Save
				</button>
				<Link
					className="btn btn-outline-secondary"
					to={"/vendors"}>
					Cancel
				</Link>
			</div>
		</form>
	);
}

export default UserForm;
