import axios from "axios"
import { useEffect, useState } from "react"

const JsonGet = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data)
                setPosts(response.data)
            }).catch((error) => {
                console.error(error)
            })
    }, [])
    return (
        <div>
            <h1>hello</h1>
            <table border="one">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default JsonGet
