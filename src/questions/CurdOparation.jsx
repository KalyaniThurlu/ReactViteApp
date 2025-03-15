import { useState } from "react"



const CurdOparations = () => {
    const [items, setItems] = useState([])
    const [inputs, setInputs] = useState("")
    const [updatedItem, setUpdatedItem] = useState(null)
    const addData = () => {
        if (updatedItem !== null) {
            const updatedItems = items.map((item, index) =>
                index === updatedItem ? inputs : item
            )
            setItems(updatedItems)
            setUpdatedItem(null)
        } else {
            setItems([...items, inputs])
        }
        setInputs("")
    }
    const updateData = (index) => {
        setInputs(items[index])
        setUpdatedItem(index)
    }
    const deletedData = (index) => {
        setItems(items.filter((_, i) =>
            i !== index
        ))
    }
    return (
        <div>
            <h1>this is curd oparations</h1>
            data <input type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} />
            <button onClick={addData}>{updatedItem !== null ? "updated" : "Add"}</button>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}
                            <button onClick={() => updateData(index)}>updated</button>
                            <button onClick={() => deletedData(index)}>deleted</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default CurdOparations
