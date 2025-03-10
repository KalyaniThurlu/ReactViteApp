import axios from "axios"
import { useState } from "react"

const DeleteApi1 = () => {
    const [id, setId] = useState("")
    const [msg, setMsg] = useState("")
    const handleCliCk = () => {
        if (!id) {
            setMsg("provide id")
            return
        }
        axios.delete(`https://api.restful-api.dev/objects/${id}`)
            .then((res) => {
                console.log(res.ok)
            }).catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            <p>{msg}</p>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
            <button onClick={handleCliCk}>deleteData</button>
        </div>
    )
}
export default DeleteApi1