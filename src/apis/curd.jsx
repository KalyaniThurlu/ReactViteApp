
import { useState } from "react";

const Curd = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAdd = () => {
        if (input.trim() === "") return; // Prevent empty input
        if (editingIndex !== null) {
            // Update existing item
            const updatedItems = [...items];
            updatedItems[editingIndex] = input;
            setItems(updatedItems);
            setEditingIndex(null);
        } else {
            // Add new item
            setItems([...items, input]);
        }
        setInput("");
    };

    const handleEdit = (index) => {
        setInput(items[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>CRUD App</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter item"
            />
            <button onClick={handleAdd}>{editingIndex !== null ? "Update" : "Add"}</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Curd;
