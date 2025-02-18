
import { useEffect, useState } from "react";

const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((response) => {
                setData(response.products);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []); 
    
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>{item.title},{item.title},{item}</li> 
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </div>
    );
};

export default Api;
