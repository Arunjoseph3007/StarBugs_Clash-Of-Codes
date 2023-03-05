import LeftBar from "@/components/LeftBar";
import MainFeed from "@/components/MainFeed";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";
import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://coctrinity.pythonanywhere.com/login/posts", {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((r) => setPosts(r.data));
  }, []);

  return (
    <main>
      <Navbar />
      <Flex alignItems="flex-start">
        <Box position="sticky" top={5} width="20%">
          <LeftBar />
        </Box>
        <Box flex={2}>
          <MainFeed setPosts={setPosts} posts={posts} />
        </Box>
        <Box position="sticky" top={5} flex={1}>
          <RightBar />
        </Box>
      </Flex>
    </main>
  );
}
