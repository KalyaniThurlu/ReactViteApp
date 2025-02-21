
import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("")


    const handleCliCk = (value) => {
        switch (value) {
            case "Ac":
                setInput("")
                break;
            case "Del":
                setInput(input.slice(0, -1))
                break;

            case "=":
                try {
                    setInput(eval(input).toString())

                } catch (error) {
                    setInput("error")
                }
                break;
            default:
                setInput(input + value);
                value;


        }
    }
    return (
        <div>
            <h1>hello</h1>
            <div>
                <input type="text" value={input} />
            </div>
            <div>
                <input type="button" value="Ac" onClick={() => handleCliCk("Ac")} />
                <input type="button" value="Del" onClick={() => handleCliCk("Del")} />
                <input type="button" value="*" onClick={() => handleCliCk("*")} />
                <input type="button" value="-" onClick={() => handleCliCk("-")} />
            </div>
            <div>
                <input type="button" value="9" onClick={() => handleCliCk("9")} />
                <input type="button" value="8" onClick={() => handleCliCk("8")} />
                <input type="button" value="7" onClick={() => handleCliCk("7")} />
                <input type="button" value="6" onClick={() => handleCliCk("6")} />
            </div>
            <div>
                <input type="button" value="5" onClick={() => handleCliCk("5")} />
                <input type="button" value="4" onClick={() => handleCliCk("4")} />
                <input type="button" value="3" onClick={() => handleCliCk("3")} />
                <input type="button" value="2" onClick={() => handleCliCk("2")} />
            </div>
            <div>
                <input type="button" value="1" onClick={() => handleCliCk("1")} />
                <input type="button" value="0" onClick={() => handleCliCk("0")} />
                <input type="button" value="=" onClick={() => handleCliCk("=")} />


            </div>
        </div>
    )
}
export default Calculator;