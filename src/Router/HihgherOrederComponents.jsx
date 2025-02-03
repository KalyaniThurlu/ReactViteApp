
import React from "react";

// Higher-Order Component (HOC)
const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log("Component Rendered:", WrappedComponent.name);
        return <WrappedComponent {...props} />;
    };
};

// Simple Component
const Hello = () => {
    return <h2>Hello, HOC Example!</h2>;
};

// Wrapping Hello component with the HOC
const HelloWithLogger = withLogger(Hello);


const Hoc = () => {
    return (
        <div>
            <HelloWithLogger />
        </div>
    );
};

export default Hoc;
