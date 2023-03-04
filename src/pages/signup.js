import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [registerDetails, setRegisterDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setRegisterDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://coctrinity.pythonanywhere.com/login/register/",
        {
          email: registerDetails.email,
          password: registerDetails.password,
          username: registerDetails.userName,
        }
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex height="100vh">
      <Box justifyContent={'center'}>
        <Image
          width="100%"
          height="100%"
          
          objectFit="cover"
          src="signup.gif"
          alt="Dan Abramov"
        />
      </Box>
      <Center flex={1}>
        <Container
          width={500}
          padding={5}
          rounded="md"
          shadow="lg"
          onSubmit={handleSubmit}
          as="form"
          display="flex"
          gap={5}
          flexDirection="column"
        >
          <Heading color={'#385898'}>Signup to Chal Mere Yaar</Heading>
          <hr />
          <Flex gap={5}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                onChange={handleChange}
                value={registerDetails.firstName}
                placeholder="firstname"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                value={registerDetails.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="lastname"
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input
              value={registerDetails.userName}
              name="userName"
              onChange={handleChange}
              placeholder="username"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={registerDetails.email}
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={registerDetails.password}
              onChange={handleChange}
              placeholder='password'
            />
          </FormControl>
          <Button type="submit" colorScheme={'facebook'}>
            Submit
          </Button>
          <Center gap={2} fontSize="small">
            <Text>Already have an account</Text>
            <Link href="/login">
              <Text color="#0652cf">Login</Text>
            </Link>
          </Center>
        </Container>
      </Center>
      <Circle shadow="2xl" position="fixed" bottom={5} right={5}>
        <Button onClick={toggleColorMode} >
          {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Circle>
    </Flex>
  );
}