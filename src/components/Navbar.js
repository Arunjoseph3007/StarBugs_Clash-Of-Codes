import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      shadow="md"
      gap={3}
      alignItems="center"
      paddingInline={16}
      paddingBlock={4}
    >
      <Image alt="logo" src="/logo2.png" height={40} width={80} />
      <InputGroup>
        <Input rounded="full" placeholder="Search..." />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <Button rounded="full" onClick={toggleColorMode}>
        {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button
        paddingInline={8}
        rounded="full"
        colorScheme="facebook"
        variant="outline"
      >
        Login
      </Button>
      <Button
        paddingInline={8}
        rounded="full"
        colorScheme="facebook"
        bg="#0652cf"
      >
        Signup
      </Button>
    </Flex>
  );
}
