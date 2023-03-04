import { useState } from "react";
import Verify from "../components/Verify";
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function ProfileForm() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <FormControl maxWidth="50vw" colorScheme={"facebook"} isRequired>
        <Heading textAlign={"center"} as="h4" color={"blue.700"} my="2px">
          Edit Profile
        </Heading>
        <Stack>
          <Box display={"grid"} gridTemplateColumns="1fr 1fr">
            <FormLabel display={"inline"}>Username</FormLabel>
            <Input placeholder="Username" w="20vw" type="text" isRequired />
          </Box>
          <Box display={"grid"} gridTemplateColumns="1fr 1fr">
            <FormLabel display={"inline"}>Profile Photo</FormLabel>
            <input type="file" />
          </Box>
          <Box>
            <FormLabel>Interests</FormLabel>
            <Textarea placeholder="Interests"/>
          </Box>
          <Box display={"grid"} gridTemplateColumns="1fr 1fr">
            <FormLabel display={"inline"}>Location</FormLabel>
            <Input placeholder="Location" w="20vw" type="text" />
          </Box>
          <Box display={"grid"} gridTemplateColumns="1fr 1fr">
            <FormLabel display={"inline"}>Date of Birth</FormLabel>
            <Input w="20vw" type="date" />
          </Box>
          <Box>
            <FormLabel display={"inline"}>Gender</FormLabel>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="row">
                <Radio value="1">Male</Radio>
                <Radio value="2">Female</Radio>
                <Radio value="3">Prefer not to say</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel display={"inline"}>Verify your Profile</FormLabel>
            <Button
              colorScheme={"facebook"}
              variant="outline"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Verify
            </Button>
            <Verify
              show={showModal}
              close={() => {
                setShowModal(false);
              }}
            />
          </Box>
          <Button colorScheme="facebook" type="submit">
            Submit
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
