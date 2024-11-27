
import { useState } from "react";

export function ExAge() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  
  function calculateAge(birthdate) {
    const birthdateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthdateObj.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    

    
    
    if (month < birthdateObj.getMonth() || (month === birthdateObj.getMonth() && day < birthdateObj.getDate())) {
      age--; 
    }

    return age;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (birthdate) {
      setAge(calculateAge(birthdate));
    } else {
      setAge(null);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Age Calculator</h2>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
      {age !== null && (
        <div>
          <h2>Your age is: {age}</h2>
        </div>
      )}
    </div>
  );
}
