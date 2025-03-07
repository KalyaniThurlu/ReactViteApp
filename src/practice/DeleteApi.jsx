import axios from "axios";
import { useState } from "react";

const DeleteApi = () => {
    const [id, setId] = useState("")
    const [msg, setMsg] = useState("")

    const handleClick = () => {
        if (!id) {
            setMsg("prodive id")
            return;
        }
        axios.delete(`https://dummyjson.com/products/${id}`, {

        })

            .then((res) => {
                if (res.status === 200) {
                    console.log("deleted Successfully")
                    setMsg("deleted")
                }
            }).catch((error) => {
                console.log(error)
                setMsg("not deleted data")
            })
    }
    return (
        <div>
            {msg}

            id: <input type="text" value={id} name="id" onChange={(e) => setId(e.target.value)} />  <br />
            <button type="submit" onClick={handleClick}>Delete</button>
        </div>
    )
}
export default DeleteApi;