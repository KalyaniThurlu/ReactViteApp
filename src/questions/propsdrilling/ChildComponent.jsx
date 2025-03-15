import GrandChilCompont from "./GrandChildComponent"
const ChildComponent = ({ count, increment, decrement }) => {
    return (
        <div>
            <h2>this is child Component</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <GrandChilCompont count={count} />
        </div>
    )
}
export default ChildComponent;