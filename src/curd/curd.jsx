

import "./curd.css"
import { useState } from "react";


function Excurd() {

    
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

 
  
  const handleSubmit = () => {
    if (editIndex !== null) {
      
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? taskInput : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      
      setTasks([...tasks, taskInput]);
    }
    setTaskInput('');
  };

  
  const handleEdit = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>Curd </h1>

     
     
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? 'Update Task' : 'Add Task'}
      </button>

     
     
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Excurd;
