
import { Link } from "react-router-dom";

export function FakestoreHome() {
    return (
        <div>
            <h1>Welcome to FakeStore</h1>
            <h2><Link to="/fakestorecategories">View Categories</Link></h2>
        </div>
    );
}
