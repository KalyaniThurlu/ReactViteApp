import axios from "axios";
import { useState } from "react";

const DeletApi = () => {
    const [id, setId] = useState("")
    const [msg, setMsg] = useState(null)

    const handleClick = () => {
        if (!id) {
            setMsg("provide id")
        }
        axios(`https://dummyjson.com/products/${id}`, {

            method: "DELETE"
        })
            .then((response) => {

                if (response.status === 200) {
                    console.log("ok")


                    setMsg("sull")
                }
            }).catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            {msg}
            id:<input type="text" name={id} onChange={(e) => setId(e.target.value)} /><br />
            <button type="submit" onClick={handleClick}>Deleted</button>
        </div>
    )
}
export default DeletApi;