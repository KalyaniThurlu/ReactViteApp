import axios from "axios"
import { useState } from "react"

const PostApi = () => {
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")
    const [hardDisk, setHardDisk] = useState("")
    const [msg, setMsg] = useState("")

    const handleClick = () => {
        if (!name || !year || !price || !cpu || !hardDisk) {
            setMsg("provide all fileds")
            return;
        }
        const postData = {
            name,
            data: {
                year: Number(year),
                price: Number(price),
                "CPU model": cpu,
                "Hard disk size": hardDisk

            }
        }
        axios.post("https://api.restful-api.dev/objects", postData, {

        }).then((res) => {
            console.log(res.data)
            setMsg("data posted")
        }).catch((error) => {
            console.error(error)
            setMsg("data not posted")
        })
    }
    return (
        <div><h1>hello</h1>


            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
            Year: <input type="text" value={year} onChange={(e) => setYear(e.target.value)} /><br />
            Price:<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
            cpu:<input type="text" value={cpu} onChange={(e) => setCpu(e.target.value)} /><br />
            HardDisk:<input type="text" value={hardDisk} onChange={(e) => setHardDisk(e.target.value)} /><br />
            <button type="submit" onClick={handleClick}>postData</button>
            <h1>  {msg}</h1>
        </div>

    )
}
export default PostApi


// https://api.restful-api.dev/objects
// {
//    "name": "Apple MacBook Pro 16",
//    "data": {
//       "year": 2019,
//       "price": 1849.99,
//       "CPU model": "Intel Core i9",
//       "Hard disk size": "1 TB"
//    }
// }