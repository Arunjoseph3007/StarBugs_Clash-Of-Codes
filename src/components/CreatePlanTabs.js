import { LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const imgs = [];

export default function CreatePlanTabs({
  attractions,
  hotels,
  planReady,
  gpt = "",
  loading,
}) {
  if (loading)
    return (
      <Container my={"90px"} maxW="80vw">
        <Center>
          <Spinner size="lg" />
        </Center>
      </Container>
    );

  if (!planReady) return null;

  return (
    <Container mt={8} maxW="80vw">
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Attractions</Tab>
          <Tab>Hotels</Tab>
          <Tab>Travel Plan</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading fontFamily="Poppins">Attractions</Heading>
            <HStack alignItems="stretch" spacing={4} overflowX="auto">
              {attractions.map((attr, i) => (
                <Card
                  border="2px"
                  borderColor="gray.100"
                  flexShrink="0"
                  w="300px"
                  key={i}
                >
                  <CardHeader>
                    <Heading fontSize={20} fontFamily="Poppins">
                      {attr.name || "Gandi Maisamma Temple"}
                    </Heading>
                  </CardHeader>
                  <CardBody display="flex" flexDir="column" gap={1}>
                    <Image
                      src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 300
                      )}/400/200`}
                      w="300px"
                      rounded="md"
                    />
                    <Flex gap={2}>
                      <LockIcon />
                      <Text>{attr.address?.slice(0, 20) || attr.name}</Text>
                    </Flex>

                    <Flex gap={2}>
                      <LockIcon />
                      <Text>Rating {attr.rating || "4.2"}</Text>
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button bg="#0652cf" variant="solid" colorScheme="blue">
                        <Link href={attr.web_url || "/"}>Book Now</Link>
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        <Link href={attr.write_review || "/"}>Review</Link>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </HStack>
            {/* </Grid> */}
          </TabPanel>
          <TabPanel>
            <Heading fontFamily="Poppins">Hotels</Heading>
            <HStack alignItems="stretch" spacing={4} overflowX="auto">
              {hotels.map((attr, i) => (
                <Card
                  border="2px"
                  borderColor="gray.100"
                  flexShrink="0"
                  w="300px"
                  key={i}
                >
                  <CardHeader>
                    <Heading fontSize={20} fontFamily="Poppins">
                      {attr.name || "Gandi Maisamma Temple"}
                    </Heading>
                  </CardHeader>
                  <CardBody display="flex" flexDir="column" gap={1}>
                    <Image
                      src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 300
                      )}/400/200`}
                      w="300px"
                      rounded="md"
                    />
                    <Flex gap={2}>
                      <LockIcon />
                      <Text>{attr.address?.slice(0, 20) || attr.name}</Text>
                    </Flex>

                    <Flex gap={2}>
                      <LockIcon />
                      <Text>Rating {attr.rating || "4.2"}</Text>
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button bg="#0652cf" variant="solid" colorScheme="blue">
                        <Link href={attr.web_url || "/"}>Book Now</Link>
                      </Button>
                      <Button variant="ghost" colorScheme="blue">
                        <Link href={attr.write_review || "/"}>Review</Link>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Box mt={8} bg="gray.100" p={8}>
              <Heading fontFamily='Poppins'>Travel Plan</Heading>
              <Divider my={2}/>
              <Text fontWeight="semibold" fontSize={20} textAlign="justify">
                {gpt}
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
