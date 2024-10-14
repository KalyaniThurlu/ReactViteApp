
import { Link } from "react-router-dom";

export function Dashboard() {
    return (
        <div>
            <h2>This is the Dashboard page</h2>
            {/* Use route path instead of file path */}
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    );
}
