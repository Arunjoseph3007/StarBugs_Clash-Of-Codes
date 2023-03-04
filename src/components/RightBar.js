import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

const UserCard = ({ name, username }) => {
  return (
    <Flex marginBottom={3} alignItems="center" gap={2}>
      <Avatar size="sm" />
      <Box flex={1} fontSize="xs">
        <Text>{name}</Text>
        <Text fontSize="2xs" fontStyle="italic" color="gray">
          @{username}
        </Text>
      </Box>
      <Button colorScheme="facebook" rounded="full" variant="outline" size="xs">
        Read
      </Button>
    </Flex>
  );
};

export default function RightBar() {
  return (
    <Container>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search.." rounded="full" variant="filled" />
      </InputGroup>

      <Container
        _dark={{ bg: "gray.900" }}
        bg="gray.100"
        rounded="lg"
        marginTop={4}
        p={3}
      >
        <Text marginBottom={3} fontWeight="bold">
          Hot topics
        </Text>

        <UserCard name="Arun Joseph" username="johndoe_123" />
        <UserCard name="Arun Joseph" username="johndoe_123" />
        <UserCard name="Arun Joseph" username="johndoe_123" />
      </Container>

      <Container
        _dark={{ bg: "gray.900" }}
        bg="gray.100"
        rounded="lg"
        marginTop={4}
        p={3}
      >
        <Text marginBottom={3} fontWeight="bold">
          Online Friends
        </Text>

        <AvatarGroup colorScheme="facebook" size="md" max={4}>
          <Avatar name="Arun Joseph" />
          <Avatar name="Aaromal" />
          <Avatar name="Yash Keni" />
          <Avatar name="Sahil Shenge" />
          <Avatar name="Vishag Sivan" />
          <Avatar name="Sanjib sahu" />
          <Avatar name="Umesh singh" />
        </AvatarGroup>
      </Container>
    </Container>
  );
}
