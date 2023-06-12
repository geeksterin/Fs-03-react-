import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";
import React from "react";

function Search(props) {
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input placeholder="Enter Github User Id" />
        <Button variant="outline" color="green" p="10px 70px">
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default Search;
