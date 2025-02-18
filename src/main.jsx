
import React from 'react';
import ReactDOM from 'react-dom/client';
import Post1 from './apis/Post1';


// Create the root for rendering your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>

    <Post1 />
  </React.StrictMode>
);
