import  { useState } from 'react';
import Cookies from 'js-cookie';

const CookieExample = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get('user'));

  const setCookie = () => {
    Cookies.set('user', 'John Doe', { expires: 7 });
    setCookieValue('John Doe');
  };

  const deleteCookie = () => {
    Cookies.remove('user');
    setCookieValue(null);
  };

  return (
    <div>
      <h1>Current User: {cookieValue ? cookieValue : 'No user logged in'}</h1>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default CookieExample;
