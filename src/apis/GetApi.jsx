
import { useState } from "react";

const Delete = () => {
    const [status, setStatus] = useState(null);
    const [id, setId] = useState(""); // to store the product ID

    const handleDelete = () => {
        if (!id) {
            setStatus("Please provide a product ID.");
            return;
        }

        fetch(`https://dummyjson.com/products/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                console.log(response.ok)
                console.log("success")
            })
            .catch((error) => {
                setStatus("Error occurred while deleting object.");
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h1>Delete Product</h1>
            <input
                type="text"
                placeholder="Enter Product ID"
                value={id}
                onChange={(e) => setId(e.target.value)} 
            />
            <button onClick={handleDelete}>Delete Object</button>

            {status}
        </div>
    );
};

export default Delete;
