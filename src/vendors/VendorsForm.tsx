import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Vendor } from "./vendor";
import toast from "react-hot-toast";
import { vendorAPI } from "./VendorAPI";

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

  const save: SubmitHandler<Vendor> = async (vendor: Vendor) => {
    try {
      if (vendor.isNew) {
        await vendorAPI.post(vendor);
      } else {
        await vendorAPI.put(vendor);
      }
      navigate("/vendors");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Vendor Name
        </label>
        <input
          id="name"
          {...register("name", {
            required: "Vendor Name is required",
          })}
          className={`form-control ${errors.name && "is-invalid"} `}
          type="text"
          autoFocus
        />
        <div className="invalid-feedback">{errors?.name?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="genre">
          Address
        </label>
        <select
          {...register("address", {
            required: "Address is required",
          })}
          className={`form-select ${errors.address && "is-invalid"} `}
          id="address"
        >
          <option value="">Select...</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
        </select>
        <div className="invalid-feedback">{errors?.genre?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="year">
          Year
        </label>
        <input
          {...register("year", {
            valueAsNumber: true,
            required: "Year is required",
          })}
          className={`form-control ${errors.year && "is-invalid"} `}
          type="number"
          id="year"
          min="1920"
          max="3000"
        />
        <div className="invalid-feedback">{errors.year?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="rating">
          Rating
        </label>
        <input
          {...register("rating", {
            valueAsNumber: true,
            minLength: { value: 1, message: "1 is the lowest rating" },
            maxLength: { value: 10, message: "10 is the highest rating" },
          })}
          className={`form-control ${errors.rating && "is-invalid"} `}
          type="number"
          id="rating"
          min="1.0"
          max="10.0"
          step=".1"
        />
        <div className="invalid-feedback">{errors.rating?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="director">
          Director
        </label>
        <input {...register("director")} className="form-control" type="text" id="director" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="budgetInMillions">
          Budget
        </label>
        <input
          {...register("budgetInMillions", { valueAsNumber: true })}
          className="form-control"
          type="number"
          id="budgetInMillions"
          step="1"
        />
        <div className="form-text">Budget numbers are entered in millions</div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={"/vendors"}>
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default VendorForm;