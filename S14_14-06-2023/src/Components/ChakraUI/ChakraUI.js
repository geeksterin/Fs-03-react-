import React from "react";
import { Button, Input } from "@chakra-ui/react";

function ChakraUI(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <button>Without ChakraUI</button>
      <br />
      <br />
      <Button colorScheme="blue">Chakra UI Button</Button>
      <br />
      <br />
      <Button colorScheme="teal" variant="outline">
        Button
      </Button>
      <Input placeholder="Enter Text" />
    </div>
  );
}

export default ChakraUI;
