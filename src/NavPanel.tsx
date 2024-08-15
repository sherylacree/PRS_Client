import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link } from "react-router-dom";

function NavPanel(){
return (
    <nav
    className="bg-light px-4 mh-100 justify-content-center pt-4"
    style={{ width: "15rem" }}>
    <ul className="d-flex flex-column align-content-left w-100 list-inline">
        <a
            className="text-decoration-none"
            href="newrequests.html">
            <svg
                className="bi me-2"
                width={15}
                height={15}
                fill="currentColor">
                <use
                    xlinkHref={`${bootstrapIcons}#plus-circle-fill`}
                />
            </svg>
            Create New
        </a>
        <li className="pt-4 fw-bold mx-4 ">
            Purchase
        </li>
        <li className="nav-item pt-4 pb-2">
            <a
                className="text-decoration-none"
                href="requests.html">
                <svg
                    className="bi me-2"
                    width={25}
                    height={25}
                    fill="currentColor">
                    <use
                        xlinkHref={`${bootstrapIcons}#cart`}
                    />
                </svg>
                Request
            </a>
        </li>
        <li className="nav-item pt-4">
            <a
                className="text-decoration-none"
                href="products.html">
                <svg
                    className="bi me-2"
                    width={25}
                    height={25}
                    fill="currentColor">
                    <use
                        xlinkHref={`${bootstrapIcons}#grid`}
                    />
                </svg>
                Products
            </a>
        </li>
        <li className="nav-item pt-4">
        <Link to="/vendors" className="nav-item pt-4">
              <svg
                    className="bi me-2"
                    width={25}
                    height={25}
                    fill="currentColor">
                    <use
                        xlinkHref={`${bootstrapIcons}#building`}
                    />
                </svg>
                Vendors
            </Link>
        </li>
        <li className="nav-item pt-4">
            <a
                className="text-decoration-none"
                href="users.html">
                <svg
                    className="bi me-2"
                    width={25}
                    height={25}
                    fill="currentColor">
                    <use
                        xlinkHref={`${bootstrapIcons}#people`}
                    />
                </svg>
                Users
            </a>
        </li>
    </ul>
</nav>
);
}

export default NavPanel;