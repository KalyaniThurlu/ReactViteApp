import { useState } from "react";
import Cookies from "js-cookie";



const Excookies = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get("user"))
  const setCookie = () => {
    Cookies.set("user", "john")
    setCookieValue("john")
  }
  const removeCookie = () => {
    Cookies.remove("user")
    setCookieValue("")
  }
  return (
    <div>
      <p>cookievalue:{cookieValue ? cookieValue : "no login"}</p>
      <button onClick={setCookie}>setCookie</button>
      <button onClick={removeCookie}>removeCookie</button>
    </div>
  )
}
export default Excookies;