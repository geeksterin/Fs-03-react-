import { useState } from "react";
import {
  Container,
  Box,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Textarea,
  Select,
  Checkbox,
  Button,
  Center,
} from "@chakra-ui/react";

function Formc(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    gender: "",
    city: "",
    address: "",
    techDetails: [],
  });

  const handleForm = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = () => {
    console.log(state);
  };
  return (
    <Container mt={5} boxShadow={"dark-lg"} p={5}>
      <Box my={5}>
        <Input
          name="username"
          variant="outline"
          placeholder="User Name"
          onChange={handleForm}
        />
      </Box>
      <Box my={5}>
        <Input
          name="password"
          type="password"
          variant="outline"
          placeholder="Create Password"
          onChange={handleForm}
        />
      </Box>
      <Box my={5}>
        <Center>
          <RadioGroup>
            <Stack direction="row">
              <Radio name="gender" value="male" onChange={handleForm}>
                Male
              </Radio>
              <Radio name="gender" value="female" onChange={handleForm}>
                Female
              </Radio>
              <Radio name="gender" value="other" onChange={handleForm}>
                Other
              </Radio>
            </Stack>
          </RadioGroup>
        </Center>
      </Box>
      <Box my={5}>
        <Textarea name="address" placeholder="Add Your Detailed Address" />
      </Box>
      <Box my={5}>
        <Select placeholder="Select option" name="city">
          <option value="pune">Pune</option>
          <option value="delhi">Delhi</option>
          <option value="hyderabad">Hyderabad</option>
        </Select>
      </Box>
      <Box my={5}>
        <Center>
          <Stack spacing={5} direction="row">
            <Checkbox name="techDetails" defaultChecked>
              HTML
            </Checkbox>
            <Checkbox name="techDetails">CSS</Checkbox>
            <Checkbox name="techDetails">Javascript</Checkbox>
            <Checkbox name="techDetails" defaultChecked>
              React
            </Checkbox>
          </Stack>
        </Center>
      </Box>
      <Box my={5}>
        <Button colorScheme="blue" variant="outline" onClick={submitForm}>
          Register / SignUp
        </Button>
      </Box>
    </Container>
  );
}

export default Formc;
