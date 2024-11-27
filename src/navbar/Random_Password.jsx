
import { useState } from "react"
import "./Radom_Password.css"
export function Exradom(){
    const [pwd,setPwd]=useState()
    function generatorPwd(){
        let pass="";
        let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz0123456789@#$"
        for(let index=1; index<=7;index++){
        
            let char=Math.floor(Math.random()*string.length+1)
            setPwd(pass+=string.charAt(char))
        }
        
    }
    function copyFun(){
        navigator.clipboard.writeText(pwd)
      
        
    }
    return(
        
        
        <div>
            <h1 style={{marginTop:"40px"}}>Random Password</h1>
           
           
            <div className="container">
                <input type="text" placeholder="enter text" value={pwd}  style={{marginLeft:"5px"}}/><br /><br />
              
              <div className="btns" onClick={generatorPwd}><button>Generator pwd</button>
              <button onClick={copyFun}>Copy pwd</button></div>
                    
                    
                </div>


            </div>
      
      
    )
} 