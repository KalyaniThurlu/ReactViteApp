import axios from "axios";
import { useEffect, useState } from "react";

const GetApi = () => {

    const [items, setItems] = useState([])
    const [msg, setMsg] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                console.log(res.data)
                setItems(res.data)
                setMsg("data successfully get")
            }).catch((error) => {
                console.error(error)
            })

    }, [])

    return (
        <div className="d-flex justfy-content-center align-item-center" style={{ marginLeft: "30%" }}>
            {msg}
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default GetApi;