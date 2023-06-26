import { legacy_createStore as createStore } from "redux";
import myReducer from "../Reducers/myReducer";

let myReduxStore = createStore(myReducer);
console.log(myReduxStore.getState());

myReduxStore.subscribe(() => {
  console.log(myReduxStore.getState());
});

export default myReduxStore;
