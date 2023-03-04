import Navbar from "@/components/Navbar";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

export default function Search() {
  return (
    <Box>
      <Navbar />
      <Flex h="100vh">
        <Box w="20vw" shadow="2xl">
          <Text py={2} px={4} fontSize={20} bg="#0652cf" color="white">
            Search
          </Text>

          <Flex direction='column' gap={4} p={2}>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input placeholder="Destination.." rounded="full" variant="filled" />
            </InputGroup>
          </Flex>
        </Box>

        <Container flex={1}>list</Container>
      </Flex>
    </Box>
  );
}
