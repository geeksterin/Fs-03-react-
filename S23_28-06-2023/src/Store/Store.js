import { legacy_createStore as createStore, applyMiddleware } from "redux";
import productsReducer from "../Reducers/productReducer";
import logger from "redux-logger";

let productsStore = createStore(productsReducer, applyMiddleware(logger));

export default productsStore;
