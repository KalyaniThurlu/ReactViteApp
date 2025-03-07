import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

export function Navbar(){
    return(
        <div>
         
         
    
          <nav>
            < Link to="/" className="title">website</Link>
          <ul>
                <li><NavLink to="about">About</NavLink></li>
               <li><NavLink to="contact">Contact</NavLink></li>
                <li><NavLink to="services">service</NavLink></li>
              
              
            </ul>
          </nav>
        </div>
    )
}