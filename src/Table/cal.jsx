import { useState } from "react"

export function Excal(){
    const [color,setColor]=useState("")
    function generateRandomColor(){
        const randomColor=`#${Math.floor(Math.random()*123456).toString(16).padStart(3,"0")}`
        setColor(randomColor)
    }
    return(
        <div style={{
            backgroundColor:color,
            height:"100vh",
           display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        }}>
          
          <h1>Random Color Generator</h1>
           
          <p>Current Color: <b>{color}</b></p>
            <button onClick={generateRandomColor} style={{
                backgroundColor:"black",
                color:"white",
                border:"none",
                padding:"10px 20px",
                borderRadius:"10px"
            }}>Genarated color</button>

        </div>
    )
}