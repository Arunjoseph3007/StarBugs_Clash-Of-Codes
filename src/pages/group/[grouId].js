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
  Button,
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useState, useRef } from "react";
import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { BsCalendarDate, BsFillCalendarDateFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import Link from "next/link";
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
  const [groupDetails, setGroupDetails] = useState({
    Name: "Mera Desh Tour",
    Source: "Mumbai",
    Destination: "Kutch",
    startDate: "12/05/2023",
    endDate: "22/05/2023",
    People: 25,
    Details:
      "Padharo maare dessh presents Kutch tour for all DJites, Come with us and have fun.",
    imageurl: "/kutch.png",
    isInterested: false,
    estimateCost: "25000",
    mode: "Road",
    vcurl:
      "https://chal-mere-yaar.whereby.com/example-prefix513d5e4d-9918-4ce3-863b-66a98cbac233?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI3MDc5MTI1OSIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvZXhhbXBsZS1wcmVmaXg1MTNkNWU0ZC05OTE4LTRjZTMtODYzYi02NmE5OGNiYWMyMzMiLCJvcmdhbml6YXRpb25JZCI6IjE3OTY0NyJ9LCJpc3MiOiJodHRwczovL2FjY291bnRzLnNydi53aGVyZWJ5LmNvbSIsImlhdCI6MTY3NzkzMzYxNywicm9vbUtleVR5cGUiOiJtZWV0aW5nSG9zdCJ9.h-Uad-TMu4TGisXiC0mxFK6Df0tpPSfP4oqy4yIjhaY",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);
  return (
    <Container maxW={"7xl"}>
      <Navbar />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={"10px"}>
        <Stack spacing={4}>
          <Text
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
          </Text>
          <Heading>{groupDetails.Name}</Heading>
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
              <Text ref={btnRef} onClick={onOpen} color={"black"} as={"ins"}>
                More Deails
              </Text>
            </Text>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={"inside"}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Detailed Plan</ModalHeader>
                
                <ModalBody>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, sed quasi quia accusantium exercitationem, quos iure nostrum unde fugit, aliquid autem labore sapiente harum tempore mollitia provident similique! Debitis voluptates ipsam, culpa voluptatum fugit vitae dolorum atque sequi, architecto quis perferendis vero ipsa id? Hic voluptatibus ut reiciendis vitae dolorem rem dolore aut, suscipit eos, doloremque inventore voluptate voluptatem quidem reprehenderit temporibus ullam natus id blanditiis culpa quae laboriosam saepe fuga ipsum illo! Quos, consequatur atque animi dolore nemo beatae recusandae corrupti corporis illum laborum sint eligendi saepe sunt repellendus ea voluptates, distinctio ratione? Minus totam voluptas alias non aliquam nihil qui iste facere maxime, cumque nostrum autem mollitia aspernatur odio consequuntur vero impedit nobis quod atque eligendi ratione molestias. Asperiores voluptates tempore sapiente numquam libero! Optio sunt non eos voluptatum minus neque doloremque voluptatibus qui laborum! Eius culpa obcaecati quia distinctio necessitatibus facilis, aspernatur quos suscipit maiores repellat iste. In ullam dolores dignissimos maiores, autem voluptate ipsum necessitatibus deleniti optio a! Harum, nisi inventore? Sed, tempore maiores quae cumque, id eveniet quis ipsum minus, animi excepturi quos delectus! Accusamus sit commodi unde cupiditate id, provident, numquam est suscipit sequi labore maiores consequatur laudantium odio hic fugit saepe asperiores veniam?
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} colorScheme={"facebook"}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
          <Flex gap={4}>
            {groupDetails.isInterested?<Button
              colorScheme={"facebook"}
              background={"#00215e"}
              variant={"solid"}
              disabled={true}
            >
              Already Interested ✓
            </Button>:<Button
              colorScheme={"facebook"}
              background={"#0652cf"}
              variant={"solid"}
            >
              Interested!
            </Button>}
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
