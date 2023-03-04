import Navbar from "@/components/Navbar";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function CreatePlan() {
  return (
    <Box>
      <Navbar />
      <Box minH='100vh' py={20} bg="gray.100">
        <Container py={8} bg='white' maxW="800px" rounded="md" shadow="lg">
          <Heading>Create a Plan</Heading>
        </Container>
      </Box>
    </Box>
  );
}
