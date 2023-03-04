import { ChatIcon, SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Avatar,
  Text,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";

export default function PostCard({
  userName,
  profilePic,
  postContent,
  postImage,
  likeCount = 6,
  likePost,
}) {
  return (
    <Container
      //   _dark={{ bg: "gray.900" }}
      //   bg="gray.100"
      border="2px"
      shadow="xl"
      borderColor="gray.100"
      rounded="lg"
      marginTop={4}
      p={3}
    >
      <Flex gap={3} alignItems="center">
        <Avatar size="xs" name={userName} src={profilePic} />
        <Text fontWeight="bold">{userName}</Text>
      </Flex>
      <Text marginBlock={3}>{postContent}</Text>
      <Image width="full" objectFit="contain" src={postImage} alt="Post" />
      <Flex marginTop={2}>
        <Button onClick={likePost} variant="ghost" leftIcon={<ViewIcon />}>
          {likeCount} likes
        </Button>
        <Button variant="ghost" leftIcon={<ChatIcon />}>
          {likeCount} shares
        </Button>
        <Button variant="ghost" leftIcon={<SettingsIcon />}>
          {likeCount} comments
        </Button>
      </Flex>
    </Container>
  );
}
