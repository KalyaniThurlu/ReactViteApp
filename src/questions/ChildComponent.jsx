const PropsEx = ({ name, updateName }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <h3>{name}</h3>
            <button onClick={() => updateName("Alice Smith")}>Change Name</button>
        </div>
    );
};

export default PropsEx;
