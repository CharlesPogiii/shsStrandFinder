import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  store: reducer,
});

const store = createStore(rootReducer);

export { store };
