
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { FakestoreCategories } from "./fakestore_categories";
import { FakestoreDetails } from "./fakestore_detailes"; 
import { FakestoreProducts } from "./fakestore_products";
import { FakestoreHome } from "./fakestore_home"; 
import { Login } from "./login";
import { Error } from "./error";

export function FakestoreIndex() {
    return (
        <div>
            <BrowserRouter>
                <header className="d-flex justify-content-between p-4 my-3 bg-info text-white">
                    <div>
                        <span className="fs-5">FakeStore</span>
                    </div>
                    <div>
                        <Link to="/fakestorehome" className="link link-light">
                            <span className="mx-2">Home</span>
                        </Link>
                        <Link to="/fakestorecategories" className="link link-light">
                            <span className="mx-2">Categories</span>
                        </Link>
                        <Link to="./fakestoreproducts" className="link link-light"> <span className="mx-2">products</span></Link>
                        <Link to="./FakestoreDetailes" className="link link-light"> <span className="mx-2"> Detailes</span></Link>
                    
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<FakestoreHome />} />
                    <Route path="/fakestorecategories" element={<FakestoreCategories />} />
                    <Route path="/fakestoreproducts/:category" element={<FakestoreProducts />} />
                    <Route path="/fakestoredetails/:id" element={<FakestoreDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="*" element={<Error />} /> {/* Catch-all route for undefined paths */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
