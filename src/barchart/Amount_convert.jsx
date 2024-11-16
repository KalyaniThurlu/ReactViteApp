import { useState } from "react"

export function ConvertAmount(){
    const [amount,setAmount]=useState()
    const [convertedAmount,setConvertedAmount]=useState(null)
    function  handleClick(){
        const rate=0.011
        setConvertedAmount(amount * rate)

    }

    return(
        <div>
          <h1>coverted Amount</h1> 
          <input type="number"  value={amount}   onChange={(e)=>setAmount(e.target.value)}  /> <br />
          <button onClick={handleClick}>Convert to EUR</button>
          <div>
            {convertedAmount !== null ? (
                
      <h2>coverted Amount  €{convertedAmount.toFixed(3)} EUR</h2>
            ):(
                <h1>converted  into eup </h1>
            )
            }
          </div>

        </div>
    )
}