import axios from "axios"
import { useState } from "react"

const Post1 = () => {

    const [data, setData] = useState([])

    axios.get("https://dummyjson.com/products")
        .then((res) => {
            setData(res.data.products)

            console.log("kk")
        }).catch((error) => console.error(error))


    return (
        <div>
            <ul>
                {

                    data?.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>

        </div>
    )
}
export default Post1