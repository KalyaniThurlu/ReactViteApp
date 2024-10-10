
import { Link } from "react-router-dom";

export function Error() {
    return (
        <div>
            <h1>Invalid Access</h1>
            <Link to="/login">Try Again</Link>
        </div>
    );
}
