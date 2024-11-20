
import { useState } from 'react';

export function StudentTable() {
  const [students, setStudents] = useState([
    { roll: 1, name: 'John', grade: 'A' },
    { roll: 2, name: 'Alice', grade: 'B' },
  ]);

  const handleEdit = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const handleAddStudent = () => {
    const newStudent = { roll: '', name: '', grade: '' };
    setStudents([...students, newStudent]);
  };

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Editable Student Table</h2>
      <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Roll Number</th>
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
                  onChange={(e) => handleEdit(index, 'roll', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) => handleEdit(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.grade}
                  onChange={(e) => handleEdit(index, 'grade', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddStudent} style={{ marginTop: '10px' }}>
        Add Student
      </button>
    </div>
  );
}
