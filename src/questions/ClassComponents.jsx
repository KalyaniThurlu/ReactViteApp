

import { useState } from "react";
import PropsEx from "./ChildComponent"; // Import child component

const ParentComponent = () => {
    const [name, setName] = useState("John Doe");

    return (
        <div>
            <h1>Parent Component</h1>
            <PropsEx name={name} updateName={setName} />
        </div>
    );
};

export default ParentComponent;
