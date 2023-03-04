import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Flex, Text } from "@chakra-ui/react";
import PostCard from "./PostCard";

export default function MainFeed() {
  return (
    <Container maxW="auto">
      <Flex gap={4} alignItems="center">
        <ArrowBackIcon />
        <Text>Home</Text>
      </Flex>

      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
      <PostCard
        userName="Arun Joseph"
        profilePic=""
        postContent="Hey This is my first post"
        postImage="https://www.jetsetter.com//uploads/sites/7/2018/04/y7lEy9T7-1380x1035.jpeg"
      />
    </Container>
  );
}