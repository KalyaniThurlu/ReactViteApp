import axios from "axios"
import { useState } from "react"

const DeletApi = () => {
    const [id, setId] = useState(null)
    const [msg, setMsg] = useState("")
    const handleClick = () => {
        if (!id) {
            setMsg("provide id")
            return;
        }
        axios.delete("https://api.restful-api.dev/objects/6")
            .then((res) => {
                console.log(res.ok)
            }).catch((error) => {
                console.error(error)
            })
    }

    return (

        <div>
            <h1>{msg}</h1>
            id:<input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
            <button type="submit" onClick={handleClick}>btn</button>

        </div>
    )
}
export default DeletApi
