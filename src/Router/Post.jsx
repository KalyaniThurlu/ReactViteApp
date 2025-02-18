
import axios from "axios";
import { useState } from "react";

const Exput = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [cpu, setCpu] = useState("");
    const [hardDisk, setHardDisk] = useState("");
    const [color, setColor] = useState("");

    const handleClick = () => {
        const putData = {
            name,
            data: {
                year,
                price,
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color,
            },
        };

        axios
            .put("https://api.restful-api.dev/objects/7", putData) // ✅ Included putData in request
            .then((res) => {
                if (res.status === 200) {
                    console.log("Success", res.data);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter CPU"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter Hard Disk"
                value={hardDisk}
                onChange={(e) => setHardDisk(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <br />

            <input
                type="text"
                placeholder="Enter Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <br />

            <button type="button" onClick={handleClick}>
                Update
            </button>
        </div>
    );
};

export default Exput;
