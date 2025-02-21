import { useState } from "react";
import Cookies from "js-cookie";
const CookieEx = () => {
    const [cookieValue, setCookieValue] = useState(Cookies.get('user'))
    const setCookie = () => {
        Cookies.set("user", "john");
        setCookieValue("john");
    }
    const deleteCookie = () => {
        Cookies.remove("user");
        setCookieValue(null);
    }

    return (
        <div>
            <h1>hello</h1>
            cookievalue:{cookieValue ? cookieValue : "no user login"}
            <button onClick={setCookie}> Setcookie</button>
            <button onClick={deleteCookie}>DeletCookie</button>
        </div>
    )
}
export default CookieEx








// import { useState } from 'react';
// import Cookies from 'js-cookie';

// const CookieEx = () => {
//     const [cookieValue, setCookieValue] = useState(Cookies.get('user'));

//     const setCookie = () => {
//         Cookies.set('user', 'John Doe');
//         setCookieValue('John Doe');
//     };

//     const deleteCookie = () => {
//         Cookies.remove('user');
//         setCookieValue(null);
//     };

//     return (
//         <div>
//             <h1>Current User: {cookieValue ? cookieValue : 'No user logged in'}</h1>
//             <button onClick={setCookie}>Set Cookie</button>
//             <button onClick={deleteCookie}>Delete Cookie</button>
//         </div>
//     );
// };

// export default CookieEx;
