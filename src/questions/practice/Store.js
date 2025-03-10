import { createStore } from "redux";

const initialState = { count: 0 };

const ExReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  return state;
};

const store = createStore(ExReducer);

export default store;
