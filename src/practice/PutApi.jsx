import axios from "axios";
import { useState } from "react";

const PutApi = () => {
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")
    const [hardDisk, setHardDisk] = useState("")
    const [color, setColor] = useState("")
    const [msg, setMsg] = useState("")
    const [id, setId] = useState("")
    const handleClick = () => {
        if (!id || !name || !price || !cpu || !year || !hardDisk || !color) {
            setMsg("provede all fileds")
            return;
        }
        const putData = {
            name,
            data: {
                year: Number(year),
                price: Number(year),
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color
            }
        }
        axios.put(`https://dummyjson.com/products/${id}`, putData, {

        }).then((res) => {
            console.log(res.data)
            setMsg("updated data")
        }).catch((error) => {
            console.log(error)
            setMsg("error")
        })
    }
    return (
        <div>
            <p>{msg}</p>
            <h1>put data</h1>
            Id: <input type="text" value={id} name="id" onChange={(e) => setId(e.target.value)} /><br />
            Name:<input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} /><br />
            Price:<input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} /><br />
            Year:<input type="text" value={year} name="year" onChange={(e) => setYear(e.target.value)} /><br />
            Cpu:<input type="text" value={cpu} name="cpu" onChange={(e) => setCpu(e.target.value)} /><br />
            HardDisk:<input type="text" value={hardDisk} name="hardDisk" onChange={(e) => setHardDisk(e.target.value)} /><br />
            color:<input type="text" value={color} name="color" onChange={(e) => setColor(e.target.value)} /><br />
            <button type="submit" onClick={handleClick}>updatedDat</button>
        </div>
    )
}
export default PutApi;


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