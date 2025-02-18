

import { useState } from "react";
import axios from "axios";

const Exput1 = () => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [cpu, setCpu] = useState("");
    const [price, setPrice] = useState("");
    const [hardDisk, setHardDisk] = useState("");
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");

    const handleUpdate = () => {
        if (!id || !name || !year || !cpu || !price || !hardDisk || !color) {
            setMessage("All fields and ID are required.");
            return;
        }

        const updateData = {
            name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color,
            },
        };

        axios
            .put(`https://dummyjson.com/products/${id}`, updateData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log("Response:", response.data);
                setMessage("Product updated successfully!");
            })
            .catch((error) => {
                console.error("Error details:", error);


            });
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
                    Name:{" "}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </label>
            </div>
            <div>
                <label>
                    Year:{" "}
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Enter year"
                    />
                </label>
            </div>
            <div>
                <label>
                    CPU:{" "}
                    <input
                        type="text"
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                        placeholder="Enter CPU"
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
            <div>
                <label>
                    Hard Disk:{" "}
                    <input
                        type="text"
                        value={hardDisk}
                        onChange={(e) => setHardDisk(e.target.value)}
                        placeholder="Enter hard disk size"
                    />
                </label>
            </div>
            <div>
                <label>
                    Color:{" "}
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Enter color"
                    />
                </label>
            </div>
            <button type="button" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
};

export default Exput1;
