

import { useState } from "react";

const Curdoperations = () => {
    const [items, setItems] = useState([]); // State to store items
    const [input, setInput] = useState(""); // State for input field
    const [editItem, setEditItem] = useState(null); // State for current item being edited

    // Handle input change
    const handleInputChange = (e) => setInput(e.target.value);

    // Add or update an item
    const handleAddUpdate = () => {
        if (!input.trim()) return; // Don't add empty items

        if (editItem) {
            // Update existing item
            setItems(items.map(item => (item === editItem ? input : item)));
            setEditItem(null); // Exit edit mode
        } else {
            // Add new item
            setItems([...items, input]);
        }

        setInput(""); // Clear input field
    };

    // Edit an item
    const handleEdit = (item) => {
        setInput(item);
        setEditItem(item); // Set the item being edited
    };

    // Delete an item
    const handleDelete = (item) => {
        setItems(items.filter(i => i !== item)); // Remove item from list
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>CRUD App</h2>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter item"
                    style={{ padding: "5px", width: "70%", marginRight: "5px" }}
                />
                <button onClick={handleAddUpdate} style={{ padding: "5px" }}>
                    {editItem ? "Update" : "Add"}
                </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "10px 0",
                            padding: "5px",
                            border: "1px solid #ccc",
                        }}
                    >
                        <span>{item}</span>
                        <div>
                            <button onClick={() => handleEdit(item)} style={{ marginRight: "5px" }}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Curdoperations;
