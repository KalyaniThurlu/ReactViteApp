
import { useState } from "react";

const Calculator = () => {
  const [items, setItems] = useState([]);
  const [inputs, setInputs] = useState("");
  const [updatedIndex, setUpdatedIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!inputs.trim()) return;

    if (updatedIndex !== null) {
      // Update existing item
      const updatedItems = items.map((item, index) =>
        index === updatedIndex ? inputs : item
      );
      setItems(updatedItems);
      setUpdatedIndex(null);
    } else {
      // Add new item
      setItems([...items, inputs]);
    }

    setInputs(""); // Clear input field
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInputs(items[index]);
    setUpdatedIndex(index);
  };

  return (
    <div>
      <input
        type="text"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
      />
      <br />
      <button type="submit" onClick={handleAddOrUpdate}>
        {updatedIndex !== null ? "Update" : "Add"}
      </button>
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

export default Calculator;
