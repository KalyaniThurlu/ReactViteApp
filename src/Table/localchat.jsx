
import { useState } from 'react';
import './localchart.css';


const users = ['User1', 'User2', 'User3', 'User4'];

export function Localchart() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [selectedUser, setSelectedUser] = useState(users[0]); 

  
  function  handleInputChange  (e) {
    setMessageInput(e.target.value)
};

  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput) {
      const newMessage = {
        user: selectedUser,
        text: messageInput,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
      console.log(newMessage);
    }
  };

  
  function  handleUserChange  (e)  {
    setSelectedUser(e.target.value); 
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>LocalChartApp</h2>
        <select onChange={handleUserChange} value={selectedUser}>
          {users.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}</strong>: {msg.text} <em>({msg.time})</em>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={messageInput}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
