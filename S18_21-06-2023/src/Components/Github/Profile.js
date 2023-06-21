import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import githubContext from "./Context";

function Profile(props) {
  const { data } = useContext(githubContext);
  return (
    <Box p="10px" textAlign="center" boxShadow="dark-lg">
      <img
        src={
          data.avatar_url ||
          "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/05/data_science_projects_github.png"
        }
        height="200px"
      />
      <Heading size="md" my={2}>
        {data.name || "No Name"}
      </Heading>

      <Text my={2}>
        {data.bio ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia quis sunt in, voluptates perferendis"}
      </Text>

      <Button color="green">Profile</Button>
    </Box>
  );
}

export default Profile;
