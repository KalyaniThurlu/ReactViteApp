
import axios from "axios";
import { useState } from "react";

const PostApi = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [cpu, setCpu] = useState("");
    const [hardDisk, setHardDisk] = useState("");
    const [msg, setMsg] = useState("");
    const [color, setColor] = useState("");
    const [id, setId] = useState("");

    const nameChnage = (e) => {
        setName(e.target.value);
    };
    const priceChnage = (e) => {
        setPrice(e.target.value);
    };
    const yearChnage = (e) => {
        setYear(e.target.value);
    };
    const cpuChnage = (e) => {
        setCpu(e.target.value);
    };
    const hardDiskChnage = (e) => {
        setHardDisk(e.target.value);
    };
    const colorChnage = (e) => {
        setColor(e.target.value);
    };

    const idChnage = (e) => {
        setId(e.target.value);
    };

    const handleClick = () => {
        const postData = {
            name,
            data: {
                year,
                price,
                "CPU model": cpu,
                "Hard disk size": hardDisk,
            },
        };
        axios
            .post(`https://api.restful-api.dev/objects/add${id}`, postData, {})
            .then((res) => {
                console.log(res.data);
                setMsg("suceess");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            {msg}
            Id: <input type="text" name={id} onChange={idChnage} />
            name: <input type="text" name={name} onChange={nameChnage} />
            <br />
            price: <input type="text" name={price} onChange={priceChnage} />
            <br />
            year: <input type="text" name={year} onChange={yearChnage} />
            <br />
            cpu: <input type="text" name={cpu} onChange={cpuChnage} />
            <br />
            hardDisk: <input type="text" name={hardDisk} onChange={hardDiskChnage} />
            <br />
            color: <input type="text" name={color} onChange={colorChnage} />
            <br />
            <button type="submit" onClick={handleClick}>
                post
            </button>
        </div>
    );
};
export default PostApi;

// https://api.restful-api.dev/objects/7
// {
//    "name": "Apple MacBook Pro 16",
//    "data": {
//       "year": 2019,
//       "price": 2049.99,
//       "CPU model": "Intel Core i9",
//       "Hard disk size": "1 TB",
//       "color": "silver"
//    }
// }
