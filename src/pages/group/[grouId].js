import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Avatar,
  Button,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  Tabs,
  Tab,
  TabList,
  Tag,
  VStack,
  TabPanel,
  TabPanels,
  ModalContent,
  Badge,
  ModalHeader,
  Box,
  ModalFooter,
  ModalBody,
  HStack,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect } from "react";
import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { BsCalendarDate, BsFillCalendarDateFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const { query } = useRouter();
  const [groupDetails, setGroupDetails] = useState({
    id: 0,
    Name: "Mera Desh Tour",
    Source: "Mumbai",
    Destination: "Kutch",
    startDate: "12/05/2023",
    endDate: "22/05/2023",
    People: 25,
    Details:
      "Padharo maare dessh presents Kutch tour for all DJites, Come with us and have fun.",
    imageurl: "/kutch.png",
    isInterested: true,
    estimateCost: "25000",
    mode: "Road",
    vcurl:
      "https://chal-mere-yaar.whereby.com/example-prefix513d5e4d-9918-4ce3-863b-66a98cbac233?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI3MDc5MTI1OSIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvZXhhbXBsZS1wcmVmaXg1MTNkNWU0ZC05OTE4LTRjZTMtODYzYi02NmE5OGNiYWMyMzMiLCJvcmdhbml6YXRpb25JZCI6IjE3OTY0NyJ9LCJpc3MiOiJodHRwczovL2FjY291bnRzLnNydi53aGVyZWJ5LmNvbSIsImlhdCI6MTY3NzkzMzYxNywicm9vbUtleVR5cGUiOiJtZWV0aW5nSG9zdCJ9.h-Uad-TMu4TGisXiC0mxFK6Df0tpPSfP4oqy4yIjhaY",
    plan: "Plan Here",
    interestedUsers: [],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  async function getDetails() {
    if (!query.grouId) return;
    try {
      let headers = {
        "Content-Type": "multipart/form-data",
        Authorization: "Token " + localStorage.getItem("token"),
      };
      var res = await axios.get(
        `http://coctrinity.pythonanywhere.com/login/group-detail/${query.grouId}/`,
        { headers }
      );
      console.log(res.data);
      setGroupDetails({
        Name: res.data[0].name,
        Source: res.data[0].source,
        Destination: res.data[0].destination,
        startDate: res.data[0].start_date,
        endDate: res.data[0].time,
        People: res.data[0].no_of_people,
        Details: res.data[0].slogan,
        imageurl: "https://coctrinity.pythonanywhere.com/" + res.data[0].image,
        isInterested: false,
        estimateCost: res.data[0].budget,
        mode: res.data[0].travel_mode,
        vcurl: res.data[0].meet_link,
        plan: res.data[0].description,
        interestedUsers: res.data[0].interest_people,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const joinGroup = async () => {
    const { res } = await axios.post(
      "http://coctrinity.pythonanywhere.com/login/interest-post",
      { group: query.grouId, owner: localStorage.getItem("id") },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );

    setGroupDetails((prev) => ({ ...prev, People: prev.People + 1 }));
  };

  useEffect(() => {
    getDetails();
  }, [query]);
  return (
    <Container maxW={"7xl"}>
      <Navbar />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={"10px"}>
        <Stack spacing={4}>
          <Button
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            {groupDetails.People} People Interested
          </Button>
          <Heading fontFamily="Poppins">{groupDetails.Name}</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            {groupDetails.Details}
          </Text>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Feature
                  icon={
                    <Icon as={MdLocationOn} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"From " + groupDetails.Source}
                />
              </GridItem>
              <GridItem>
                <Feature
                  icon={<Icon as={BsFillCalendarDateFill} w={5} h={5} />}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={groupDetails.startDate}
                />
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <Feature
                  icon={
                    <Icon
                      as={MdOutlineLocationCity}
                      color={"green.700"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"To " + groupDetails.Destination}
                />
              </GridItem>
              <GridItem>
                <Feature
                  icon={<Icon as={BsCalendarDate} w={5} h={5} />}
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={groupDetails.endDate}
                />
              </GridItem>
            </Grid>
            <Feature
              icon={<Icon as={SiYourtraveldottv} w={5} h={5} />}
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"By " + groupDetails.mode}
            />

            <Text color={"gray.900"} fontSize={"lg"}>
              Estimated Cost of Plan ₹{groupDetails.estimateCost} per person
              <br />
              <Text
                ref={btnRef}
                onClick={onOpen}
                color={"black"}
                as={"ins"}
                cursor={"pointer"}
              >
                More Deails
              </Text>
            </Text>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={"inside"}
              size="xl"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Detailed Plan</ModalHeader>

                <ModalBody>
                  <Tabs>
                    <TabList>
                      <Tab>Plan</Tab>
                      <Tab>Users</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>{groupDetails.plan}</TabPanel>
                      <TabPanel>
                        <VStack>
                          {groupDetails.interestedUsers?.map((u) => (
                            <Container key={u.id}>
                              <HStack gap={3}>
                                <Avatar
                                  name={u.name}
                                  src={
                                    "http://coctrinity.pythonanywhere.com/" +
                                    u.profile_pic
                                  }
                                />
                                <Box>
                                  <Text fontSize={15} fontWeight="bold">
                                    {u.name}
                                  </Text>
                                  <HStack>
                                    {u.interest.split(" ").map((p) => (
                                      <Badge fontSize=".7rem" key={p}>
                                        {p}
                                      </Badge>
                                    ))}
                                  </HStack>
                                  {}
                                </Box>
                                {u.is_verify && (
                                  <Tag colorScheme="facebook">Verified</Tag>
                                )}
                              </HStack>
                            </Container>
                          ))}
                        </VStack>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} colorScheme={"facebook"}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
          <Flex gap={4}>
            {groupDetails.isInterested ? (
              <Button
                colorScheme={"facebook"}
                background={"#00215e"}
                variant={"solid"}
                disabled={true}
              >
                Already Interested ✓
              </Button>
            ) : (
              <Button
                colorScheme={"facebook"}
                background={"#0652cf"}
                variant={"solid"}
                onClick={joinGroup}
              >
                Interested!
              </Button>
            )}
            <Link href={groupDetails.vcurl} target="_blank">
              <Button colorScheme={"facebook"} variant={"outline"}>
                Join VC
              </Button>
            </Link>
          </Flex>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={groupDetails.imageurl}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
