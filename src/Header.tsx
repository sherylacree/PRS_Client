import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function Header(){
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
				<a
					className="btn btn-primary py-1 px-4 my-3"
					href="signin.html">
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
				</a>
			</header>
    )
}
export default Header;