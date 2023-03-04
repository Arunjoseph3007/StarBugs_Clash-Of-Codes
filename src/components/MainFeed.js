import {
  ArrowBackIcon,
  ChatIcon,
  SettingsIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PostCard from "./PostCard";
import axios from "axios";
import { useState } from "react";

export default function MainFeed({ posts }) {
  const [nP, setNP] = useState({
    title: "",
    content: "",
    body: "",
    location: "",
    img: null,
  });

  const uIm = (e) => setNP((p) => ({ ...p, img: e.target.files[0] }));

  const hC = (e) => setNP((p) => ({ ...p, [e.target.name]: e.target.value }));

  const createPost = async () => {
    /**
     * owner title body location image_post
     */
    const d = new FormData();
    d.append("title", nP.title);
    d.append("content", nP.content);
    d.append("body", nP.body);
    d.append("location", nP.location);
    d.append("images_post", nP.img);

    const { data } = await axios.post(
      "http://coctrinity.pythonanywhere.com/login/posts/",
      d,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    location.reload();
  };

  const likePost = async (id) => {
    const { res } = await axios.post(
      "http://coctrinity.pythonanywhere.com/login/post-like/",
      { group_post: id, owner: localStorage.getItem("id") },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return (
    <Container maxW="auto">
      <Flex gap={4} alignItems="center">
        <ArrowBackIcon />
        <Text>Home</Text>
      </Flex>
      <Container
        border="2px"
        shadow="xl"
        borderColor="gray.100"
        rounded="lg"
        marginTop={4}
        display="flex"
        flexDir="column"
        gap={2}
        p={3}
      >
        <Flex gap={3} alignItems="center">
          <Avatar size="xs" name="Arun joseph" />
          <Text fontWeight="bold">Arun joseph</Text>
        </Flex>
        <Flex gap={3} alignItems="center">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              onChange={hC}
              value={nP.title}
              placeholder="Enter title"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              onChange={hC}
              placeholder="eg. Dombivli, Maharashtra"
              value={nP.location}
            />
          </FormControl>{" "}
        </Flex>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="file" onChange={uIm} />
        </FormControl>{" "}
        <Textarea value={nP.body} name="body" onChange={hC} marginBlock={3} />
        <Flex>
          <Button
            colorScheme="facebook"
            bg="#0652cf"
            leftIcon={<SettingsIcon />}
            onClick={createPost}
          >
            Create Post
          </Button>
        </Flex>
      </Container>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          userName={post.owner.username}
          profilePic=""
          postContent={post.title}
          postImage={post.images_post}
          likeCount={post.like_on_post_count}
          likePost={() => likePost(post.id)}
        />
      ))}
    </Container>
  );
}
