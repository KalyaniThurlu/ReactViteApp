
import { useState } from "react";

export function Calculator() {
    const [currentInput, setCurrent] = useState("");

    function handleClick(value) {
        switch (value) {
            case "Ac":
                setCurrent("");
                break;
            case "Del":
                setCurrent(currentInput.slice(0, -1));
                break;
            case "=":
                try {
                    setCurrent(eval(currentInput).toString());
                } catch {
                    setCurrent("Error");
                }
                break;
            default:
                setCurrent(currentInput + value);
                break;
        }
    }

    return (
        <form action="">
            <div>
                <input type="text" value={currentInput} readOnly />
            </div>
            <div>
                <input type="button" value="Ac" onClick={() => handleClick("Ac")} />
                <input type="button" value="Del" onClick={() => handleClick("Del")} />
                <input type="button" value="%" onClick={() => handleClick("%")} />
                <input type="button" value="*" onClick={() => handleClick("*")} />
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
            </div>
        </form>
    );
}
