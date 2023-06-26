import { createContext, useContext, useReducer } from "react";
import productReducer from "./productReducer";

export let productContext = createContext();
function ProductsContext({ children }) {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  const addData = (type, data) => {
    dispatch({
      type: type,
      payload: data,
    });
  };
  return (
    <productContext.Provider value={{ state, addData }}>
      {children}
    </productContext.Provider>
  );
}

export default ProductsContext;
