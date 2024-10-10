
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function FakestoreCategory() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading
    const [cookies, setCookies, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();

    useEffect(() => {
        if (cookies['userid']) {
            axios.get('https://fakestoreapi.com/products/categories')
                .then(response => {
                    setCategories(response.data);
                    setLoading(false); // Set loading to false after fetching
                })
                .catch(error => {
                    console.error("Error fetching categories:", error);
                    setLoading(false); // Also stop loading on error
                });
        } else {
            navigate("/login");
        }
    }, [navigate, cookies['userid']]); // Check userid directly

    function handleSignoutClick() {
        removeCookie('userid');
        navigate('/home');
    }

    // Show loading message or categories
    if (loading) {
        return <div>Loading categories...</div>;
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
                {
                    categories.map(category => (
                        <li className="my-3" key={category}>
                            <Link className="btn btn-dark w-25" to={`/products/${category}`}>
                                {category.toUpperCase()}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div>
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    );
}
