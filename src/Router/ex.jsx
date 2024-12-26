import { useState } from "react";

export function Exlist(){

    const [items,setItems]=useState([])
    const [newItem,setNewItem]=useState("")
    const [editIndex,setEditIndex]=useState(null)
    function handleClick(){
        if(newItem.trim()!==""){
            if(newItem==null){
                

            }

        }
    }
    return(
        <div>
            <input type="text" value={newItem} placeholder="enyter text"  />
            <button onClick={handleClick}>{editIndex!==null?"editedBtn":"add btn"}</button>
        </div>
    )
}