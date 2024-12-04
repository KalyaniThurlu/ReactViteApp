
import { useState } from 'react';
const employees = [
  { id: 1, name: 'latha', position: 'Software Engineer' },
  { id: 2, name: 'padhma', position: 'Product Manager' },
  { id: 3, name: 'suma', position: 'Designer' },
  { id: 4, name: 'priya', position: 'Project Manager' },
  { id: 5, name: 'Geetha', position: 'Developer' },
];

export function Employeedirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.includes(searchTerm)
  );

  return (
    <div>
      <h1>Employee Directory</h1>
      <input
        type="text"
     
        
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    
    
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(employee => (
            <div key={employee.id} >
              <h3>{employee.name}</h3>
              <p>{employee.position}</p>
            </div>
          ))
        ) : (
          <p>No employees found</p>
        )}
      </div>
    
    
  );
}
