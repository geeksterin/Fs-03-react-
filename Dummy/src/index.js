import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProductsContext from "./Components/ProductsContext/ProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContext>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ProductsContext>
);
