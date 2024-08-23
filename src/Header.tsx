import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./users/UserContext";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
function Header(){
const {user, setUser}= useUserContext();
const navigate = useNavigate();

function signOut(){
localStorage.removeItem("user");
	setUser(undefined);
	navigate("/signin")
}



    return(
	<header className="container-fluid justify-content-between d-flex bg-light pe-4 ps-4 pt-1 fw-bolder">
				<span>
					<svg
						id="logo-35"
						width={50}
						height={39}
						viewBox="0 0 50 39"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
							className="ccompli1"
							fill="#007AFF"
						/>
						<path
							d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
							className="ccustom ms-0 ps-0"
							fill="#312ECB"
						/>
					</svg>
					Purchase Request System
				</span>

{ user?.id ?
				<details className="dropdown pe-5">
        <summary className="btn btn-tertiary dropdown-toggle d-flex align-items-center">
          <span
            style={{ width: "3rem", height: "3rem" }}
            className="d-flex  bg-primary-subtle fs-5 text-secondary align-items-center justify-content-center rounded-circle me-2"
          >
             {user?.firstname?.substring(0, 1)}
             {user?.lastname?.substring(0, 1)}
          </span>
          {user?.firstname} {user?.lastname}
        </summary>
        <div className="d-flex justify-content-end">
          <ul
            className="dropdown-menu bg-body-tertiary"
            style={{ display: "revert" }}
          >
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <button className="dropdown-item" onClick={signOut}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </details>
	 : <Link
	 className="btn btn-primary"
	 to="/signin">
	 <svg
		 className="bi me-2"
		 width={25}
		 height={25}
		 fill="currentColor">
		 <use
			 xlinkHref={`${bootstrapIcons}#person`}
		 />
	 </svg>
	 Sign in
 </Link> }

    </header>
  );
}

export default Header

				{/* <Link
					className="btn btn-primary py-1 px-4 my-3"
					to="/signin">
					<svg
						className="bi"
						width={25}
						height={25}
						fill="currentColor">
						<use
							xlinkHref={`${bootstrapIcons}#person`}
						/>
					</svg>
					Sign In
				</Link>
			</header>
    )
}
export default Header; */}