
const ChildComponent1 = ({ name, updatedName }) => {
    return (
        <div>
            <h1>name:{name}</h1>
            <button onClick={updatedName("rama")}>nameChange</button>
        </div>
    )
}

export default ChildComponent1;