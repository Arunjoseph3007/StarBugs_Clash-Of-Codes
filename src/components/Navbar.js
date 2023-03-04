import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      
      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
    </Flex>
  );
}
