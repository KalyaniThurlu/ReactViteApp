import axios from "axios";
import { useState } from "react";

const PutApi = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [color, setColor] = useState("")
    const [cpu, setCpu] = useState("")
    const [hardDisk, setHardDisk] = useState("")
    const [msg, setMsg] = useState("")

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const idChange = (e) => {
        setId(e.target.value)
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const yearChange = (e) => {
        setYear(e.target.value)
    }
    const cpuChange = (e) => {
        setCpu(e.target.value)
    }
    const hardDiskChange = (e) => {
        setHardDisk(e.target.value)
    }
    const colorChange = (e) => {
        setColor(e.target.value)
    }

    const handleClick = () => {
        if (!name || !color || !price || !year || !cpu || !hardDisk || !id) {
            setMsg("provide all fields")
            return;
        }

        const putData = {
            name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color
            }
        }
        axios.put(`https://dummyjson.com/products/${id}`, putData, {
            headers: { "Content-Type": "application/json" }
        }).then((res) => {
            console.log(res.data)
            setMsg("det")
        })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>
            {msg}
            id:<input type="text" name={id} onChange={idChange} /><br />
            name:<input type="text" name={name} onChange={nameChange} /><br />
            price:<input type="text" name={price} onChange={priceChange} /><br />
            year:<input type="text" name={year} onChange={yearChange} /><br />
            cpu:<input type="text" name={cpu} onChange={cpuChange} /><br />
            hardDisk:<input type="text" name={hardDisk} onChange={hardDiskChange}
            /><br />
            color:<input type="text" name={color} onChange={colorChange} /><br />
            <button type="submit" onClick={handleClick}>Put</button>
        </div>
    )
}
export default PutApi;



//https://api.restful-api.dev/objects/7
// {
//     "name": "Apple MacBook Pro 16",
//     "data": {
//        "year": 2019,
//        "price": 2049.99,
//        "CPU model": "Intel Core i9",
//        "Hard disk size": "1 TB",
//        "color": "silver"
//     }
//  }