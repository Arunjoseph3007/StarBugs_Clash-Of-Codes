import { ArrowBackIcon, Icon, SettingsIcon } from "@chakra-ui/icons";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import PostCard from "./PostCard";
import axios from "axios";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

export default function MainFeed({ posts, setPosts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

    setPosts((prev) =>
      prev.map((p) =>
        p.id == id ? { ...p, like_on_post_count: p.like_on_post_count + 1 } : p
      )
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
          <Text flex={1} fontWeight="bold">
            Arun joseph
          </Text>
          <Button
            colorScheme="facebook"
            bg="#0652cf"
            leftIcon={<SettingsIcon />}
            onClick={onOpen}
          >
            Create Post
          </Button>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="600px">
            <ModalHeader>Create you post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
              <Textarea
                value={nP.body}
                name="body"
                onChange={hC}
                marginBlock={3}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Flex>
                <Button
                  colorScheme="facebook"
                  bg="#0652cf"
                  leftIcon={<Icon as={BsFillSendFill} />}
                  onClick={createPost}
                >
                  Create Post
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
