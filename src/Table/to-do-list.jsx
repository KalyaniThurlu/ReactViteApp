
import { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState([]); 
  
  const [newItem, setNewItem] = useState(""); 
  
  const [editIndex, setEditIndex] = useState(null); 
  

  
  function handleClick() {
    if (newItem.trim() !== "") {
      if (editIndex !== null) {
        
        const updatedItems = [...items];
        updatedItems[editIndex] = newItem;
        setItems(updatedItems);
        setEditIndex(null); 
      } else {
        
        setItems([...items, newItem]);                                                                                                                                                                       
      }
      setNewItem(""); 
    }
  }

  
  function deletedBtn(index) {
    const deleted = items.filter((_, i) => i !== index); 
    setItems(deleted);
  }

  
  function editBtn(index) {
    setEditIndex(index); 
    
    setNewItem(items[index]); 
    
  }

  return (
    <div>
      
      <div style={{ display: "flex", alignItems: "center", marginLeft: "5%" }}>
    <h2>To-Do-List</h2>
</div>
<div style={{display:"flex",alignItems:"center",gap:"10px"}}>
  
      <input 
      style={{paddingLeft:"10px"}}
        type="text"
        value={newItem}
        placeholder="Enter text"
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={handleClick}>
        {editIndex !== null ? "Update Item" : "Add Item"}
      </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
           
            <div style={{ paddingLeft: "5px" }}>
    <button onClick={() => deletedBtn(index)} style={{ marginRight: "10px" }}>Delete</button>
    <button onClick={() => editBtn(index)}>Edit</button>
</div>

          
          </li>
        ))}
      </ul>
    </div>
  );
}
                                                                                                  
