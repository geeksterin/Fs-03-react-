import React from "react";
import Search from "./Search";
import Profile from "./Profile";
import Details from "./Details";
import { Box, Container, Flex } from "@chakra-ui/react";

function Home(props) {
  return (
    <Container boxShadow="dark-lg" mt="10px" maxW="1000px" p="30px">
      <Box mb="10px">
        <Search />
      </Box>

      <Flex>
        <Box w="30%">
          <Profile />
        </Box>
        <Box w="65%" color="white">
          <Details />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
