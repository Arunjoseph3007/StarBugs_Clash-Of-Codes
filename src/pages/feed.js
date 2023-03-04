import LeftBar from "@/components/LeftBar";
import MainFeed from "@/components/MainFeed";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";
import { Box, Flex } from "@chakra-ui/react";

export default function Feed() {
  return (
    <main>
      <Navbar />
      <Flex alignItems="flex-start">
        <Box position="sticky" top={5} width="20%">
          <LeftBar />
        </Box>
        <Box flex={2}>
          <MainFeed />
        </Box>
        <Box position="sticky" top={5} flex={1}>
          <RightBar />
        </Box>
      </Flex>
    </main>
  );
}