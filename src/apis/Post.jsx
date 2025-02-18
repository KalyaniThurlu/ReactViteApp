
import axios from "axios";
import { useState } from "react";

const PostApi = () => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [cpu, setCpu] = useState("");
    const [hardDisk, setHardDisk] = useState("");
    const [color, setColor] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleCreate = () => {
        const newData = {
            name,
            data: {
                year,
                price,
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color,
            },
        };

        // Log the data to check before sending
        console.log("Creating the following data:", newData);

        // Make the POST request to create new data
        axios
            .post("https://api.restful-api.dev/objects", newData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log("Success:", response.data);
                setResponseMessage("Data successfully created.");
            })
            .catch((error) => {
                console.error("Error:", error);
                setResponseMessage("An error occurred while creating data.");
            });
    };

    return (
        <div>
            <h1>Create Data</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="CPU Model"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Hard Disk Size"
                value={hardDisk}
                onChange={(e) => setHardDisk(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <br />
            <button type="button" onClick={handleCreate}>
                Create Data
            </button>
            <div>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>
    );
};

export default PostApi;
