


import { useState } from 'react';
export function Counter(){
    const [num,setNum]=useState(0)
        function increment(){
            setNum(num+1)

        }
    
        function decrement(){
            setNum(num-1)
        }


    return(
        <div>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>
<p>{num}</p>

        </div>

    )
}