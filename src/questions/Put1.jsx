import axios from "axios";
import { useState } from "react";



const Parent = () => {
    const [id, setId] = useState("")
    const [msg, setMsg] = useState(null)

    const handleClick = () => {
        if (!id) {
            setMsg("provide id")
        }
        axios.delete("https://api.restful-api.dev/objects/6")
            .then((res) => {
                console.log(res.ok)
                setMsg("data deleted")
            }).catch((error) => {
                console.error(error)
            })
    }

    return (

        <div>
            {msg}
            <input type="text" name={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>delete</button>
        </div>
    )
}
export default Parent;
