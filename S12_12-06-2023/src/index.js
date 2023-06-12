import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CustomContextProvider } from "./Components/ContextProvider/Context";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </ChakraProvider>
);
