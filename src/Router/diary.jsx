import  { useState, useEffect } from 'react';

 export function Diary() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

 
  
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    if (newEntry) {
      setEntries([...entries, newEntry]);
      setNewEntry('');
    }
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="App">
      <h1>My Diary</h1>

      <div>
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write your diary entry..."
          rows="5"
          cols="40"
        ></textarea>
        <br />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>

      <h2>Your Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <p>{entry}</p>
            <button onClick={() => handleDeleteEntry(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



