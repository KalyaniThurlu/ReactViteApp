
import { useState, useEffect } from "react";
import axios from "axios";

const ApiExample = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        function fetchUsers() {
            { /* axios("https://dummyjson.com/users?delay=1000")

                .then((responce) => {
                    setUsers(responce.data.users)

                }).catch((error) => {
                    setError(error.message)

                })

                .finally(() => {
                    setLoading(false)
                })*/}

            fetch("https://dummyjson.com/users?delay=1000")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    return response.json(); // Parse JSON
                })
                .then((data) => {
                    setUsers(data.users); // Access data.users correctly
                })

                .catch((error) => {
                    setError(error.message)

                }).finally(() => {
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

                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ApiExample;
