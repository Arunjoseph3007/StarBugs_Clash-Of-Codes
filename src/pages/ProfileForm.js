import { useState } from "react";
import Verify from "../components/Verify";
import axios from "axios";
import FormData from "form-data";
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Stack,
  Box,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";

export default function ProfileForm() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    // let data = new FormData();
    // data.append("name", name);
    // data.append("location", location);
    // data.append("interest", interest);
    // data.append("dob", dob);
    // data.append("gender", gender);
    // console.log(data)

    let data = {
      user: "3",
      name: { name },
      interests: { interest },
      dob: { dob },
      location: { location },
      gender: { gender },
    };
    console.log(data);

    try {
      let headers = {
        "Content-Type": "application/json",
        Authorization:
          "Token 9fb10eb951c9c33a768b4dc475d410f3c2064b928004a2a3aa13a1648f70494c",
      };
      let reqOptions = {
        url: "https://coctrinity.pythonanywhere.com/login/profile-create",
        method: "POST",
        headers: headers,
        data: data,
      };

      let response = await axios.request(reqOptions);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setLocation("");
      setDob("");
      setGender("");
      setInterest("");
    }
  }
  
  return (
    <Center my={20} minH="100vh">
      <Box
        w="50vw"
        shadow='xl'
        border={"2px"}
        borderColor="gray.100"
        p={4}
        rounded="md"
        display="block"
      >
        <FormControl
          colorScheme={"facebook"}
          encType="multipart/form"
          as="form"
        >
          <Heading fontFamily='Poppins' textAlign={"center"} as="h4" color={"#0652cf"} my={4}>
            Edit Profile
          </Heading>
          <Stack>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Username</FormLabel>
              <Input
                placeholder="Username"
                w="20vw"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Profile Photo</FormLabel>
              <input type="file" />
            </Box>
            <Box>
              <FormLabel>Interests</FormLabel>
              <Textarea
                placeholder="Interests"
                id="interestsInput"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
            </Box>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Location</FormLabel>
              <Input
                placeholder="Location"
                w="20vw"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Box>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Date of Birth</FormLabel>
              <Input
                w="20vw"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Box>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Gender</FormLabel>
              <Input
                w="20vw"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
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
            <Button colorScheme="facebook" onClick={submitForm}>
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </Center>
  );
}
