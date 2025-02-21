
import axios from "axios";
import { useState } from "react";

const PostApi = () => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [cpu, setCpu] = useState("");
    const [hardDisk, setHardDisk] = useState("");
    const [msg, setMsg] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const yearChange = (e) => {
        setYear(e.target.value);
    };

    const priceChange = (e) => {
        setPrice(e.target.value);
    };

    const cpuChange = (e) => {
        setCpu(e.target.value);
    };

    const hardDiskChange = (e) => {
        setHardDisk(e.target.value);
    };

    const handleClick = () => {
        const postData = {
            name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpu,
                "Hard disk size": hardDisk,
            },
        };

        axios
            .post("https://api.restful-api.dev/objects", postData)
            .then((res) => {
                console.log(res.data);
                setMsg("Data posted successfully!");
            })
            .catch((error) => {
                console.error(error);
                setMsg("Error posting data.");
            });
    };

    return (
        <div>
            <h3>{msg}</h3>
            Name: <input type="text" value={name} onChange={nameChange} /><br />
            Price: <input type="text" value={price} onChange={priceChange} /><br />
            Year: <input type="text" value={year} onChange={yearChange} /><br />
            CPU: <input type="text" value={cpu} onChange={cpuChange} /><br />
            Hard Disk: <input type="text" value={hardDisk} onChange={hardDiskChange} /><br />
            <button type="button" onClick={handleClick}>Post</button>
        </div>
    );
};

export default PostApi;
