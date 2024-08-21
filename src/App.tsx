import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import NavPanel from "./NavPanel";
import Header from "./Header";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";
import VendorList from "./vendors/VendorList";
import VendorsCreate from "./vendors/VendorsCreate";
import VendorsEdit from "./vendors/VendorsEdit";
import UserPage from "./users/UsersPage";
import UserList from "./users/UserList";
import UserCreate from "./users/UserCreate";
import UsersEdit from "./users/UsersEdit";
import ProductsCreate from "./products/ProductsCreate";
import ProductsEdit from "./products/ProductsEdit";
import ProductList from "./products/ProductList";
import ProductsPage from "./products/ProductsPage";
import RequestsPage from "./requests/RequestsPage";
import RequestList from "./requests/RequestList";
import RequestsCreate from "./requests/RequestCreate";
import RequestsEdit from "./requests/RequestEdit";
import RequestDetailPage from "./requests/RequestDetailPage";

function App() {
	return (
		<BrowserRouter>
			<>
				<div>
					<Header />
					<main className="d-flex">
						<NavPanel />
						<section className="content container-fluid mx-5 my-2 py-4">
							<Routes>
								<Route
									path="/"
									element={<IndexPage />}
								/>
								<Route
									path="/vendors"
									element={
										<VendorsPage />
									}
								/>
								<Route
									path="/vendors"
									element={<VendorList />}
								/>
								<Route
									path="/vendors/create"
									element={
										<VendorsCreate />
									}
								/>
								<Route
									path="/vendors/edit/:id"
									element={
										<VendorsEdit />
									}
								/>
								<Route
									path="/users"
									element={<UserPage />}
								/>
								<Route
									path="/users/create"
									element={<UserCreate />}
								/>
								<Route
									path="/users"
									element={<UserList />}
								/>
								<Route
									path="/users/edit/:id"
									element={<UsersEdit />}
								/>
								<Route
									path="/products"
									element={
										<ProductsPage />
									}
								/>
								<Route
									path="/products"
									element={
										<ProductList />
									}
								/>
								<Route
									path="/products/create"
									element={
										<ProductsCreate />
									}
								/>
								<Route
									path="/products/edit/:id"
									element={
										<ProductsEdit />
									}
								/>
								<Route
									path="/requests"
									element={
										<RequestsPage />
									}
								/>
								<Route
									path="/requests"
									element={
										<RequestList />
									}
								/>
								<Route
									path="/requests/create"
									element={
										<RequestsCreate />
									}
								/>
								<Route
									path="/requests/edit/:id"
									element={
										<RequestsEdit />
									}
								/>
								<Route
									path="/requests/detail/:requestId"
									element={
										<RequestDetailPage />
									}
								/>
								<Route
									path="/requests/list/:requestId"
									element={
										<RequestList />
									}
								/>
							</Routes>
						</section>
					</main>
					<section className="container-fluid justify-content-between d-flex bg-light pe-4 ps-4 pt-1 fw-bolder"></section>
				</div>
			</>
		</BrowserRouter>
	);
}
export default App;
