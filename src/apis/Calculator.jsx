import { useState } from "react";

const Calculator1 = () => {

    const [input, setInput] = useState("")

    const handleClick = (value) => {
        if (value === "Ac") {
            setInput("")

        } else if (value === "Del") {
            setInput(input.slice(0, -1))
        } else if (value === "=") {
            try {
                setInput(eval(input).toString())
            } catch (error) {
                setInput("error")
            }

        }
        else {
            setInput(input + value)
        }
    }

    return (
        <div>
            <div>
                <input type="text" value={input} />
            </div>
            <div>
                <input type="button" value="Ac" onClick={() => handleClick("Ac")} />
                <input type="button" value="Del" onClick={() => handleClick("Del")} />
                <input type="button" value="*" onClick={() => handleClick("*")} />
                <input type="button" value="%" onClick={() => handleClick("%")} />
            </div>
            <div>
                <input type="button" value="9" onClick={() => handleClick("9")} />
                <input type="button" value="8" onClick={() => handleClick("8")} />
                <input type="button" value="7" onClick={() => handleClick("7")} />
                <input type="button" value="6" onClick={() => handleClick("6")} />
            </div>
            <div>
                <input type="button" value="5" onClick={() => handleClick("5")} />
                <input type="button" value="4" onClick={() => handleClick("4")} />
                <input type="button" value="3" onClick={() => handleClick("3")} />
                <input type="button" value="2" onClick={() => handleClick("2")} />
            </div>
            <div>
                <input type="button" value="1" onClick={() => handleClick("1")} />
                <input type="button" value="0" onClick={() => handleClick("0")} />
                <input type="button" value="=" onClick={() => handleClick("=")} />
                <input type="button" value="+" onClick={() => handleClick("+")} />
            </div>

        </div>
    )
}
export default Calculator1;