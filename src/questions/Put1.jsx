import axios from "axios"
import { useEffect, useState } from "react"

const DeletApi1 = () => {
    const [items, setItems] = useState([])
    const [msg, setMsg] = useState("")


    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                console.log(res.data.products)
                setItems(res.data.products)
                setMsg("data get")

            }).catch((error) => {
                console.error(error)

            })
    }, [])


    return (

        <div>
            <h1>{msg}</h1>
            <ul>
                {
                    items.map((item, id) => (
                        <li key={id}>{item.id}
                            {item.price}
                            {item.title}
                        </li>

                    ))
                }
            </ul>

        </div>
    )
}
export default DeletApi1
