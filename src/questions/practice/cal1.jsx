import { useState } from "react";

const Cal1 = () => {
    const [data, setData] = useState({
        num1: "", num2: "", rst: "", oparator: ""
    })
    const getResults = () => {
        const { num1, num2, oparator } = data
        let n1 = Number(num1)
        let n2 = Number(num2)
        let rst = ""

        if (oparator === "+") {
            rst = n1 + n2

        } else if (oparator === "-") {
            rst = n1 - n2

        } else if (oparator === "*") {
            rst = n1 * n2
        }
        else {
            rst = "invalid oparator";
        }
        setData({ ...data, rst })
    }
    const clearReasults = () => {
        setData({ num1: "", num2: "", rst: "", oparator: "" })
    }

    return (
        <div>
            Num1:<input type="text" value={data.num1} name="num1" onChange={(e) => setData({ ...data, num1: e.target.value })} /><br />
            Num2:<input type="text" value={data.num2} name="num2" onChange={(e) => setData({ ...data, num2: e.target.value })} /><br />
            Oparator:<input type="text" value={data.oparator} name="oparator" onChange={(e) => setData({ ...data, oparator: e.target.value })} /><br />
            Results:<input type="text" value={data.rst} name="rst" onChange={(e) => setData({ ...data, rst: e.target.value })} /><br />
            <button type="submit" onClick={getResults}>GetResults</button>
            <button type="submit" onClick={clearReasults}>ClearData</button>
        </div>

    )
}
export default Cal1;