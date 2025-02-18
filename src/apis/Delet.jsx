import axios from "axios"
import { useState } from "react"

const Delete = () => {
    const [statuss, setStatuss] = useState(null)
    const [id, setId] = useState("")
    const handleClick = () => {
        if (!id) {
            setStatuss("provide id")
            return
        }
        axios(`https://dummyjson.com/products/${id}`, {
            method: "DELETE"
        }).then((response) => {
            console.log(response.ok)
            setStatuss("ok")
        }).catch((error) => {
            console.error(error)
            setStatuss("falied")
        })
    }
    return (
        <div>
            <h1>hell</h1>
            <input type="text" name={id} onChange={(e) => setId(e.target.value)} /><br />
            <button type="submit" onClick={handleClick}>deleteData</button>
            {statuss}
        </div>
    )
}
export default Delete
