
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";

export function FakestoreProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cookies, removeCookie] = useCookies(['userid']);
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies['userid']) {
            axios.get(`https://fakestoreapi.com/products/category/${category}`)
                .then(response => {
                    setProducts(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching products:", error);
                    setLoading(false);
                });
        } else {
            navigate("/login");
        }
    }, [category, navigate, cookies['userid']]);

    function handleSignoutClick() {
        removeCookie('userid');
        navigate('/login');
    }

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <div>
            <h2 className="d-flex justify-content-between">
                <span>{category}</span>
                <span>
                    {cookies['userid']}
                    <button onClick={handleSignoutClick} className="btn btn-warning">Signout</button>
                </span>
            </h2>
            <div className="row">   
                {products.map(product => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card my-3">
                            <img src={product.image} alt={product.title} className="card-img-top" style={{width:"200px",height:"200px"}}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Rating: {product.rating.rate}</p>
                                <Link to={`/fakestoredetails/${product.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/fakestorecategories">Back to Categories</Link>
        </div>
    );
}
