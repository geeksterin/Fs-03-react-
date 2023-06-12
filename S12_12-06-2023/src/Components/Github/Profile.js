import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

function Profile(props) {
  return (
    <Box p="10px" textAlign="center">
      <img
        src="https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak="
        height="200px"
      />
      <Heading size="lg">Rajiv Sinha</Heading>
      <p>Male</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia quis
        sunt in, voluptates perferendis
      </p>

      <Button color="green">Profile</Button>
    </Box>
  );
}

export default Profile;
