import { useEffect, useState } from "react";
import Verify from "../components/Verify";
import axios from "axios";
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
  Text,
} from "@chakra-ui/react";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/router";

export default function ProfileForm() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [imageDetails, setImageDetails] = useState(null);
  const router = useRouter();
  const { refresh } = useUser();
  useEffect(() => {
    setName(
      `${
        localStorage.getItem("firstname") +
        " " +
        localStorage.getItem("lastname")
      }`
    );
  }, []);
  function uploadImage() {
    let file = document.getElementById("fileInput").files[0];
    if (file)
      setImageDetails( file );
  }

  async function submitForm(e) {
    e.preventDefault();
    let data = new FormData();
    data.append("user", localStorage.getItem("id"));
    data.append("name", name);
    data.append("location", location);
    data.append("interest", interest);
    data.append("dob", dob);
    data.append("gender", gender);
    if (imageDetails)
    data.append("profile_pic", imageDetails);
    
  

    try {
      let headers = {
        "Content-Type": "multipart/form-data" ,
        Authorization: "Token " + localStorage.getItem("token"),
      };
      let response = await axios.post(
        "https://coctrinity.pythonanywhere.com/login/profile-create",
        data,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setLocation("");
      setDob("");
      setGender("");
      setInterest("");
      setImageDetails(null);
      refresh()
      router.push(`/feed`);
    }
  }

  return (
    <Center minH="100vh">
      <Box
        w="50vw"
        shadow="xl"
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
          <Heading
            fontFamily="Poppins"
            textAlign={"center"}
            as="h4"
            color={"#0652cf"}
            my={4}
          >
            Edit Profile
          </Heading>
          <Stack>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Name</FormLabel>
              <Text w="20vw">{name}</Text>
            </Box>
            <Box display={"grid"} gridTemplateColumns="1fr 1fr">
              <FormLabel display={"inline"}>Profile Photo</FormLabel>
              <input
                  name="photo"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={uploadImage}
                />
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
