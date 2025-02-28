
import { useState } from "react";

const Curd = () => {
    const [items, setItems] = useState([])
    const [inputs, setInputs] = useState("")
    const [updatedItem, setUpdatedItem] = useState(null)

    const handleChange = (e) => {
        setInputs(e.target.value)

    }
    const updatedClick = () => {
        if (!inputs.trim()) return;
        if (updatedItem !== null) {
            const updatedItems = items.map((item, index) =>
                index === updatedItem ? inputs : item
            );

            setItems(updatedItems)
            setUpdatedItem(null)


        } else {

            setItems([...items, inputs])
        }
        setInputs("")


    }

    const deleted = (index) => {
        setItems(items.filter((_, i) => i !== index));


    }


    return (
        <div>

            <input type="text" value={inputs} onChange={handleChange} />
            <button onClick={updatedClick}>{updatedItem !== null ? "update" : "Add"}</button>
            <ul>
                {
                    items.map((item, index) => (

                        <li key={index}>{item}
                            <button onClick={() => setUpdatedItem(index)}>updated</button>
                            <button onClick={() => deleted(index)}>deleted</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Curd;
