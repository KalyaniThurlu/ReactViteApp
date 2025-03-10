
import { useEffect, useState } from "react";

const Exfetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
     
        fetch("https://api.restful-api.dev/objects")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                    .catch((error) => {
                        console.error(error)
                    })
            })


    }, []);

    return (
        <div>
            <h1>hello</h1>
            <ol>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default Exfetch;
