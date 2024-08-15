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

function App() {
	return (
		<BrowserRouter>
			<>
				<div>
					<Header />
					<main className="d-flex">
						<NavPanel />
						<section className="content container-fluid mx-5 my-2 py-4">
							<IndexPage />
						</section>
            <Routes>
              <Route path="/" element={<IndexPage />}/> 
              <Route path="/vendors" element={<VendorsPage />}/> 
            </Routes>
					</main>
					<section className="container-fluid justify-content-between d-flex bg-light pe-4 ps-4 pt-1 fw-bolder"></section>
				</div>
			</>
		</BrowserRouter>
	);
}

export default App;
