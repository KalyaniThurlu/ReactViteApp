import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  let count = useSelector((state) => state.count)

  let dispatch = useDispatch()

  return (
    <div>
      <h1>hello</h1>
      <h1>count:{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  )

}
export default Counter