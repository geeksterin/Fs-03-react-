import {
  Box,
  Card,
  CardHeader,
  Heading,
  Text,
  Stack,
  StackDivider,
  CardBody,
} from "@chakra-ui/react";
import { useContext } from "react";
import githubContext from "./Context";

function Details(props) {
  const { data } = useContext(githubContext);
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Github User Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              NAME
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.name || "NO NAME"}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              EMAIL
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.email || "abc@gmail.com"}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Public Repositories
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.public_repos || 100}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Followers
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.followers || 100}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Following
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.following || 100}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Details;
