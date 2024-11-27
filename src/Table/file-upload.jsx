import { useState } from "react"

export function Exfileupload(){
    const [image,setIamge]=useState("")
    function handleChange(e){
        setIamge(e.target.file)
    }
    return(
        <div style={{marginTop:"10%",marginLeft:"20%"}}>
            <form action="">
           <h2>Image Uploaded</h2>
                <input type="file"  value={image} onChange={handleChange}/><br /><br />
                <button type="submit">upload</button>
            </form>
        </div>
    )
}