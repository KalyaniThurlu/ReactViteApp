

import { useState } from "react";

const VirtualDom = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Hello</h1>
            {count}
            <button onClick={() => setCount(count + 1)}>btn</button>

        </div>
    );
};

export default VirtualDom;
