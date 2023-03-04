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

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex gap={3} alignItems="center" paddingInline={16} paddingBlock={4}>
      <Text fontSize="3xl">Logo</Text>
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
