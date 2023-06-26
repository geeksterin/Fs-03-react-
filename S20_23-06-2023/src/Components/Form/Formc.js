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
  const handletechDetails = (event) => {
    if (event.target.checked) {
      setState({
        ...state,
        techDetails: [...state.techDetails, event.target.value],
      });
    } else {
      var filteredData = state.techDetails.filter(
        (ele) => ele != event.target.value
      );
      setState({
        ...state,
        techDetails: filteredData,
      });
    }
  };
  const submitForm = () => {
    console.log(state);
    setState({
      username: "",
      password: "",
      gender: "",
      city: "",
      address: "",
      techDetails: [],
    });
  };
  return (
    <Container mt={5} boxShadow={"dark-lg"} p={5}>
      <Box my={5}>
        <Input
          value={state.username}
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
            <Checkbox
              value="html"
              name="techDetails"
              onChange={handletechDetails}
            >
              HTML
            </Checkbox>
            <Checkbox
              value="css"
              name="techDetails"
              onChange={handletechDetails}
            >
              CSS
            </Checkbox>
            <Checkbox
              value="javascript"
              name="techDetails"
              onChange={handletechDetails}
            >
              Javascript
            </Checkbox>
            <Checkbox
              value="react"
              name="techDetails"
              onChange={handletechDetails}
            >
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
