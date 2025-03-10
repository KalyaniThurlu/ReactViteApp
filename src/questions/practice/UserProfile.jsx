import { useParams } from "react-router-dom"

const User = () => {
    const { username } = useParams()
    return <h1>wellcome to users {username}</h1>
}
export default User;
