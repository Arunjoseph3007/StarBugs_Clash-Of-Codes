import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [registerDetails, setRegisterDetails] = useState({
    userName: "",
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
        "https://coctrinity.pythonanywhere.com/login/login/",
        {
          username: registerDetails.userName,
          password: registerDetails.password,
        }
      );
      localStorage.setItem("token",res.token)
      // localStorage.setItem("username",res.user.username)
      router.push("/" + "feed");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} color={"#385898"}>
            Sign in to your account
          </Heading>
          <FormControl id="email">
            <FormLabel>Username</FormLabel>
            <Input
              type="email"
              name="userName"
              placeholder="username"
              value={registerDetails.userName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={registerDetails.password}
              onChange={handleChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Link color={"#385898"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"facebook"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
            <Center gap={2} fontSize="small">
              <Text>Don&apos;t have an account? </Text>
              <Link href="/signup">
                <Text color="#0652cf">SignUp</Text>
              </Link>
            </Center>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"login.gif"} />
      </Flex>
    </Stack>
  );
}
