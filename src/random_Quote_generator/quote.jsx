import { useState } from "react"

export function Randam(){
    const quotes=[
        'The best way to predict the future is to invent it.',
    'Life is 10% what happens to us and 90% how we react to it.',
    'The only way to do great work is to love what you do.',
    'Success is not the key to happiness. Happiness is the key to success.',

    ]
    const [quote,setQuote]=useState(quotes[0])
function handleClick(){
    const handleIndex=Math.floor(Math.random()*quotes.length)
    
    setQuote(quotes[handleIndex])
}


return(
    <div><h1>generator random number</h1>
    <p>{quote}</p>
    <button onClick={handleClick}>btn</button>
    </div>



)
}