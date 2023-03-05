import { useUser } from "@/context/userContext";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Text,
  useColorMode,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const { logout, user } = useUser();
  const router = useRouter();
  function doLogout(params) {
    logout();
    router.push(`/`);
  }
  return (
    <Flex
      gap={3}
      alignItems="center"
      justifyContent={"space-between"}
      paddingBlock={4}
    >
      <Image
        alt={"Logo"}
        align={"center"}
        w={"8%"}
        h={"10%"}
        src={"/logo2.png"}
      />
      <InputGroup width={"80%"}>
        <Input rounded="full" placeholder="Search..." />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>

      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar
              size={"md"}
              src={
                user?.photoUrl
                  ? "http://coctrinity.pythonanywhere.com/"+user.photoUrl
                  : "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={doLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
