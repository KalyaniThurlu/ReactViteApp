import { useEffect, useState } from "react";
import "./randomimages.css";

export function Exrandom(){
    const [cartImage,setCartImage]=useState("")
    const [loding,setLoading]=useState(true)
    const fetchImage=()=>{
        
        setLoading(true)
        fetch('https://api.thecatapi.com/v1/images/search')
        .then((response)=>response.json())
        .then(data=>{
            setCartImage(data[0].url)
            setLoading(false)
        }).catch((error)=>{

            console.log(error)
        })
       
        
        
    }
    useEffect(()=>{
        fetchImage()

    },[])

    return (
        <div className="cat-container">
            <h1>Random Cat Image</h1> 
            { loding ?(
                    <p>loding....</p>

                ):(
                    <div>  <img src={cartImage} alt="a random cart" className="cat-image" /><br /><br />
                    <button onClick={fetchImage}>Fetch Another Cat</button>
                    </div>
                  
                    
                )
            }


        </div>
    )
}


