
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function FakestoreCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cookies, removeCookie] = useCookies(['userid']);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies['userid']) {
            axios.get('https://fakestoreapi.com/products/categories')
                .then(response => {
                    setCategories(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching categories:", error);
                    setLoading(false);
                });
        } else {
            navigate("/login");
        }
    }, [navigate, cookies['userid']]);

    function handleSignoutClick() {
        removeCookie('userid');
        navigate('/login');
    }

    if (loading) {
        return <div>Loading categories</div>;
    }

    return (
        <div>
            <h2 className="d-flex justify-content-between">
                <span>Categories</span>
                <span>
                    {cookies['userid']}
                    <button onClick={handleSignoutClick} className="btn btn-warning">Signout</button>
                </span>
            </h2>
            <ul className="list-unstyled">
                {categories.map(category => (
                    <li className="my-3" key={category}>
                        <Link className="btn btn-dark w-25" to={`/fakestoreproducts/${category}`}>
                            {category.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/fakestorehome">Back to Home</Link>
        </div>
    );
}
