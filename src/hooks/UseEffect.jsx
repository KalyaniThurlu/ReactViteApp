import { useEffect, useState } from "react"

const ExuseEffect = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respose) => respose.json())
            .then((json)=>{

                setData(json)
                console.log(json)
            })

            
            .catch((error) => {
                console.error("failed     tched", error)
                return () => {
                    console.log("cleanup data")
                }

            }, [])
    })
    return (
        <div>
            <ol>
                {
                    data.map((post) => 

                        <li key={post} >{post.id}{post.title}</li>
                    )
                }
            </ol>

        </div>
    )
}
export default ExuseEffect;