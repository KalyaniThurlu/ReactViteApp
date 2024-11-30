import { useState } from 'react';

export function ExpenseTracker() {
  const [expenseName, setExpenseName] = useState(''); 
  const [expenseAmount, setExpenseAmount] = useState(""); 
  const [totalBalance, setTotalBalance] = useState(""); 
  const [expenses, setExpenses] = useState([]); 

  const handleAddExpense = () => {
   
    
    if (expenseName && expenseAmount ) {
      setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
      setTotalBalance(totalBalance - expenseAmount);
      setExpenseName(''); 
      setExpenseAmount(); 
    } else {
      alert('Please enter a valid expense name and amount!');
    }
  };

  return (
    <div style={{ maxWidth: '500px',marginLeft:"20%",marginTop:"5%", padding: '20px' }}>
      <h1>Expense Tracker</h1>
      <h2>Balance: {totalBalance}</h2>
      <div>
  
  
          Expense Name:
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
       
       
      </div>
      <div>
        
        
          Expense Amount:
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(Number(e.target.value))}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
      
      
      </div>
      <button onClick={handleAddExpense} style={{ padding: '10px 20px' }}>
        Add Expense
      </button>

      <h3>Expenses List:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
