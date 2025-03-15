import { createStore } from "redux";
let initialState = { count: 0 };
const Exreducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else {
   return state;
  }
};
let store = createStore(Exreducer);
export default store;
