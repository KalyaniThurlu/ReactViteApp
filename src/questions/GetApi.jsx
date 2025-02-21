

import axios from "axios";
import { useEffect, useState } from "react";

const GetApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://api.restful-api.dev/objects")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            }).catch((error) => {
                console.error(error)
            })

    }, [])
    return (
        <div>
            <h1>hello</h1>

            <ol>

                {
                    data.length > 0 ? (
                        data.map((item) => (
                            <li key={item.id}>{item.name}</li>

                        ))

                    ) : (
                        <div><h1>\loading</h1></div>
                    )
                }
            </ol>
        </div>
    )
}
export default GetApi;