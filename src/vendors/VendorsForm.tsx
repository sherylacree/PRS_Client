import { SubmitHandler, useForm } from "react-hook-form";
import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import { Vendor } from "./Vendor";
import toast from "react-hot-toast";
import { vendorAPI } from "./VendorAPI";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function VendorForm() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const vendorId = Number(id);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Vendor>({
		defaultValues: async () => {
			if (!vendorId) {
				return Promise.resolve(new Vendor());
			} else {
				return await vendorAPI.find(vendorId);
			}
		},
	});

	const save: SubmitHandler<Vendor> = async (
		vendor: Vendor
	) => {
		try {
			if (vendor.isNew) {
				await vendorAPI.post(vendor);
			} else {
				await vendorAPI.put(vendor);
			}
			toast.success("Successfully saved");
			navigate("/vendors");
		} catch (error: any) {
			toast.error(error.message);







			
		}
	};

	return (
		
		<div className="bg-light">
		<form
			className="w-75"
			onSubmit={handleSubmit(save)}
			noValidate>
			<div className="d-flex">
				<div className="mb-3 mx-2 w-25">
					<label
						className="form-label"
						htmlFor="code">
						Vendor Code
					</label>
					<input
						id="name"
						{...register("code", {
							required:
								"Vendor code is required",
						})}
						className={`form-control ${
							errors.code && "is-invalid"
						} `}
						type="text"
						placeholder="Enter short vendor code"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.code?.message}
					</div>
				</div>
				<div className="mb-3 ms-2 w-75">
					<label
						className="form-label"
						htmlFor="name">
						Vendor Name
					</label>
					<input
						id="name"
						{...register("name", {
							required:
								"Vendor Name is required",
						})}
						className={`form-control ${
							errors.name && "is-invalid"
						} `}
						type="text"
						placeholder="Enter vendor name"
						autoFocus
					/>
					<div className="invalid-feedback">
						{errors?.name?.message}
					</div>
				</div>
			</div>

			<div className="mb-3 mx-2 w-100">
				<label
					className="form-label"
					htmlFor="address">
					Address
				</label>
				<input
					id="address"
					{...register("address", {
						required: "Address is required",
					})}
					className={`form-control ${
						errors.address && "is-invalid"
					} `}
					type="text"
					placeholder="Enter vendor's address"
				/>
				<div className="invalid-feedback">
					{errors?.address?.message}
				</div>
			</div>
			<div className="d-flex">
				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="city">
						City
					</label>
					<input
						id="city"
						{...register("city", {
							required: "City is required",
						})}
						className={`form-control ${
							errors.city && "is-invalid"
						} `}
						type="text"
						placeholder="Enter vendor's city"
					/>
					<div className="invalid-feedback">
						{errors?.city?.message}
					</div>
				</div>
				<div className="mb-3 ms-2 w-25">
					<label
						className="form-label"
						htmlFor="state">
						State
					</label>
					<select
						{...register("state", {
							required: "State is required",
						})}
						className={`form-select ${
							errors.state && "is-invalid"
						} `}
						id="state">
						<option value="">Select...</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">
							California
						</option>
						<option value="CO">Colorado</option>
						<option value="CT">
							Connecticut
						</option>
						<option value="DE">Delaware</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">
							Louisiana
						</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">
							Massachusetts
						</option>
						<option value="MI">Michigan</option>
						<option value="MN">
							Minnesota
						</option>
						<option value="MS">
							Mississippi
						</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">
							New Hampshire
						</option>
						<option value="NJ">
							New Jersey
						</option>
						<option value="NM">
							New Mexico
						</option>
						<option value="NY">New York</option>
						<option value="NC">
							North Carolina
						</option>
						<option value="ND">
							North Dakota
						</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">
							Pennsylvania
						</option>
						<option value="RI">
							Rhode Island
						</option>
						<option value="SC">
							South Carolina
						</option>
						<option value="SD">
							South Dakota
						</option>
						<option value="TN">
							Tennessee
						</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">
							Washington
						</option>
						<option value="WV">
							West Virginia
						</option>
						<option value="WI">
							Wisconsin
						</option>
						<option value="WY">Wyoming</option>
						<option value="AB">Alberta</option>
						<option value="BC">
							British Columbia
						</option>
						<option value="MB">Manitoba</option>
						<option value="NB">
							New Brunswick
						</option>
						<option value="NL">
							Newfoundland and Labrador
						</option>
						<option value="NS">
							Nova Scotia
						</option>
						<option value="ON">Ontario</option>
						<option value="PE">
							Prince Edward Island
						</option>
						<option value="QC">Quebec</option>
						<option value="SK">
							Saskatchewan
						</option>
						<option value="NT">
							Northwest Territories
						</option>
						<option value="NU">Nunavut</option>
						<option value="YT">Yukon</option>
						<option value="AG">
							Aguascalientes
						</option>
						<option value="BC">
							Baja California
						</option>
						<option value="BS">
							Baja California Sur
						</option>
						<option value="CM">Campeche</option>
						<option value="CS">Chiapas</option>
						<option value="CH">
							Chihuahua
						</option>
						<option value="CO">Coahuila</option>
						<option value="CL">Colima</option>
						<option value="DG">Durango</option>
						<option value="GT">
							Guanajuato
						</option>
						<option value="GR">Guerrero</option>
						<option value="HG">Hidalgo</option>
						<option value="JA">Jalisco</option>
						<option value="MX">
							Mexico State
						</option>
						<option value="MI">
							Michoacán
						</option>
						<option value="MO">Morelos</option>
						<option value="NA">Nayarit</option>
						<option value="NL">
							Nuevo León
						</option>
						<option value="OA">Oaxaca</option>
						<option value="PU">Puebla</option>
						<option value="QT">
							Querétaro
						</option>
						<option value="QR">
							Quintana Roo
						</option>
						<option value="SL">
							San Luis Potosí
						</option>
						<option value="SI">Sinaloa</option>
						<option value="SO">Sonora</option>
						<option value="TB">Tabasco</option>
						<option value="TM">
							Tamaulipas
						</option>
						<option value="TL">Tlaxcala</option>
						<option value="VE">Veracruz</option>
						<option value="YU">Yucatán</option>
						<option value="ZA">
							Zacatecas
						</option>
					</select>
					<div className="invalid-feedback">
						{errors?.state?.message}
					</div>
				</div>
				<div className="mb-3 ms-2 w-25">
					<label
						className="form-label"
						htmlFor="zip">
						Zip Code
					</label>
					<input
						id="zip"
						{...register("zip", {
							required:
								"Zip Code is required",
						})}
						className={`form-control ${
							errors.zip && "is-invalid"
						} `}
						type="text"
						placeholder="Enter vendor's zip code"
					/>
					<div className="invalid-feedback">
						{errors?.zip?.message}
					</div>
				</div>
			</div>

			<div className="d-flex">
				<div className="mb-3 mx-2 w-50">
					<label
						className="form-label"
						htmlFor="title">
						Phone
					</label>
					<input
						id="phone"
						{...register("phone")}
							
						className="form-control"							
						type="text"
						placeholder="Enter vendor's phone number"
					/>
					
				</div>
				<div className="mb-3 ms-2 w-50">
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
						placeholder="Enter vendor's email"
					/>
				
				</div>
			</div>
			<div className="d-flex gap-2 justify-content-end">
				
				<Link
					className="btn btn-outline-primary"
					to={"/vendors"}>
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
					type="submit"
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
					Save Vendor
				</button>
			</div>
		</form>
		</div>
	);
}

export default VendorForm;
