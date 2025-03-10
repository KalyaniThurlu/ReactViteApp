


import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
};

export default Counter;
