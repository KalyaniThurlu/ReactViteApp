
import { useState } from "react";

export function Student() {
  const [students, setStudents] = useState([
    { roll: 1, name: "Latha", grade: "A" },
    { roll: 2, name: "Suma", grade: "B" },
  ]);

  
  function handleEdit(index, field, value) {
    const updatedList = [...students];
    updatedList[index][field] = value; 
    setStudents(updatedList);
  }

 
  
  function handleDelet(index) {
    const updatedStudent = students.filter((_, i) => i !== index);
    setStudents(updatedStudent);
  }


  
  function handleAdd() {
    const newStudent = { roll: "", name: "", grade: "" };
    setStudents([...students, newStudent]);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Student Table</h1>
      <div style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <table border="1" style={{ width: "80%", margin: "20px auto" }}>
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={student.roll}
                    onChange={(e) => handleEdit(index, "roll", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleEdit(index, "name", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={student.grade}
                    onChange={(e) => handleEdit(index, "grade", e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelet(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAdd} style={{ marginTop: "5px" }}>
          Add Student
        </button>
      </div>
    </div>
  );
}
