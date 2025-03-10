
import axios from "axios";
import { useState } from "react";

const DeleteData = () => {
    const [id, setId] = useState("");
    const [msg, setMsg] = useState(null);

    const handleClick = () => {
        if (!id) {
            setMsg("Provide an ID");
            return;

        }

        axios.delete(`https://api.restful-api.dev/objects/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log("Deleted successfully");
                    setMsg("Deleted successfully");
                }
            })
            .catch((error) => {
                console.error(error);
                setMsg("Error deleting data.");
            });
    };

    return (
        <div>
            <p>{msg}</p>
            <label>
                ID: <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <br />
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default DeleteData;
