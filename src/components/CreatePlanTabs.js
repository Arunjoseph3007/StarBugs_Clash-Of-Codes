import { Icon, LockIcon } from "@chakra-ui/icons";
import {
  Badge,
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
import { BiMap } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaMapMarked, FaMapMarkerAlt } from "react-icons/fa";

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
            <Heading my={2} fontFamily="Poppins">
              Attractions
            </Heading>
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
                  <CardBody display="flex" flexDir="column" gap={3}>
                    <Image
                      src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 300
                      )}/400/200`}
                      w="300px"
                      rounded="md"
                    />
                    <Flex gap={2}>
                      {attr.ride_providers?.map((a) => (
                        <Badge key={a}>{a}</Badge>
                      ))}
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Icon as={BsStarFill} />
                      <Text color="gray.500" fontSize={13}>
                        Rating: {attr.rating || "4.2"}
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Icon as={FaMapMarkerAlt} />
                      <Text color="gray.500" fontSize={13}>
                        Distance: {attr.distance_string || "7.3 kms"}
                      </Text>
                    </Flex>
                    {attr.address_obj?.street1 && (
                      <Flex gap={2}>
                        <Icon alignSelf="start" as={FaMapMarked} />
                        <Text color="gray.500" fontSize={13}>
                          {attr.address_obj?.street1 +
                            ", " +
                            attr.address_obj?.street2 +
                            ", " +
                            attr.address_obj?.street1}
                        </Text>
                      </Flex>
                    )}
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
                  <CardBody display="flex" flexDir="column" gap={3}>
                    <Image
                      src={`https://picsum.photos/id/${Math.floor(
                        Math.random() * 300
                      )}/400/200`}
                      w="300px"
                      rounded="md"
                    />
                    <Flex gap={2}>
                      {attr.ride_providers?.map((a) => (
                        <Badge key={a}>{a}</Badge>
                      ))}
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Icon as={BsStarFill} />
                      <Text color="gray.500" fontSize={13}>
                        Rating: {attr.rating || "4.2"}
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap={2}>
                      <Icon as={FaMapMarkerAlt} />
                      <Text color="gray.500" fontSize={13}>
                        Distance: {attr.distance_string || "7.3 kms"}
                      </Text>
                    </Flex>
                    {attr.address_obj?.street1 && (
                      <Flex gap={2}>
                        <Icon alignSelf="start" as={FaMapMarked} />
                        <Text color="gray.500" fontSize={13}>
                          {attr.address_obj?.street1 +
                            ", " +
                            attr.address_obj?.street2 +
                            ", " +
                            attr.address_obj?.street1}
                        </Text>
                      </Flex>
                    )}
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
              <Heading fontFamily="Poppins">Travel Plan</Heading>
              <Divider my={2} />
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
