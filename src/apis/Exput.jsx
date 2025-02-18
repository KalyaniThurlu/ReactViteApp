import axios from "axios"

import { useState } from "react"

const Put2 = () => {
    const [name, setName] = useState()
    const [year, setYear] = useState()
    const [price, setPrice] = useState()
    const [cpu, setCpu] = useState()
    const [hardDisk, setHardDisk] = useState()
    const [color, setColor] = useState()
    const [msg, setMsg] = useState("")
    const [id, setId] = useState("")

    const nameChange = (e) => {
        setName(e.target.value)
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
    const idChange = (e) => {
        setId(e.target.value)
    }
    const handleClick = () => {
        if (!name || !price || !year || !cpu || !hardDisk || !color || !id) {
            setMsg("all fielsd arr required")
            return
        }
        const updateData = {
            name,
            data: {
                year: Number(year),
                price: Number(year),
                "CPU model": cpu,
                "Hard disk size": hardDisk,
                color
            }
        }
        axios.put(`https://dummyjson.com/products/${id}`, updateData, {

        }).then((res) => {
            console.log(res.data)
            setMsg("successfulyy")

        }).catch((error) => { console.error(error) })
    }

    return (
        <div>
            {msg}
            <h1>hello</h1>
            Name:  <input type="text" name={name} onChange={nameChange} /> <br />
            <input type="text" name={id} onChange={idChange} /><br />
            Year: <input type="text" name={year} onChange={yearChange} /> <br />
            Price :<input type="text" name={price} onChange={priceChange} /> <br />
            Cpu: <input type="text" name={cpu} onChange={cpuChange} /> <br />
            HardDisk: <input type="text" name={hardDisk} onChange={hardDiskChange} /> <br />
            Color: <input type="text" name={color} onChange={colorChange} /> <br />
            <button type="submit" onClick={handleClick}>updated</button>
        </div>
    )
}
export default Put2