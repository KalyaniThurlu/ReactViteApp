
import axios from "axios";
import { useEffect, useState } from "react";

const ExUseEffect = () => {
    const [items, setItems] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        axios.get("https://api.restful-api.dev/objects")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
                setMsg("data fetched");
            })
            .catch((error) => {
                console.error(error);
                setMsg("error");
            });
    }, []);

    return (
        <div>
            <p>{msg}</p>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.id}
                        {item.name}
                        {item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExUseEffect;
