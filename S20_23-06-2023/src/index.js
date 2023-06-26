import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CustomProductProvider from "./Components/ProductsContext/productContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CustomProductProvider>
      <App />
    </CustomProductProvider>
  </BrowserRouter>
);
