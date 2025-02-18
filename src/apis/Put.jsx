
import { useState } from "react";
import axios from "axios";

const Put = () => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState(""); 

    const handleUpdate = () => {
        if (!id || !title || !price) {
            setMessage("All fields and ID are required.");
            return;
        }

        const updateData = {
            title,
            price: Number(price),
        };

        axios
            .put(`https://dummyjson.com/products/${id}`, updateData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log("Response:", res.data);
                setMessage("Object updated successfully!");
            })
            .catch((error) => {
                console.log(error)
            })




    };

    return (
        <div>
            <h1>{message}</h1>
            <div>
                <label>
                    ID:{" "}
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter object ID"
                    />
                </label>
            </div>
            <div>
                <label>
                    Title:{" "}
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                    />
                </label>
            </div>
            <div>
                <label>
                    Price:{" "}
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                    />
                </label>
            </div>
            <button type="button" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
};

export default Put;
