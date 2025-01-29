
import { useState, useEffect } from "react";

const ApiExample = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        function fetchUsers() {
            fetch("https://dummyjson.com/users?delay=1000")
                .then((response) => {

                    if (!response.ok) {
                        throw new error("failed to fecth data")
                    }
                    return response.json()
                })

                .then((data) => {
                    setUsers(data.users)

                }).catch((error) => {
                    setError(error.message)

                })

                .finally(() => {
                    setLoading(false)
                })


        };

        fetchUsers();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Users List</h1>
            <ol>
                {users.map((user) => (
                    <li key={user.id} >
                        {user.firstName} {user.lastName}

                        {/* Display user name */}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ApiExample;
