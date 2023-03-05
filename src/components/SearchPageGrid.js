import {
  Card,
  SimpleGrid,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  CardHeader,
  Flex,
  Button,
  Image,
  Text,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import {  LockIcon, SearchIcon } from "@chakra-ui/icons";
import { getAttractions } from "@/utils/getAttractions";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaMapMarked, FaMapMarkerAlt } from "react-icons/fa";
export default function SearchPageGrid({ isLocation }) {
  if (!isLocation) {
    return null;
  }
  const [attractions, setAttractions] = useState([]);
  const [key, setKey] = useState("");
  async function searchAttraction() {
    const data = await  getAttractions(key)
    setAttractions(data.data)
    console.log(data.data);
  }
  return (
    <>
      <Flex alignContent={"center"} justifyContent={"center"} my={"20px"}>
      <InputGroup width={"70%"}>
        
        <Input rounded="full" placeholder="Search..." value={key} onChange={(e) => setKey(e.target.value)}/>
        <InputRightElement>
          <SearchIcon onClick={searchAttraction} />
        </InputRightElement>
      </InputGroup>
        </Flex>    
      {/* <SimpleGrid minChildWidth="300px" spacing="40px"> */}
      <SimpleGrid minChildWidth="300px" spacing="40px">
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
            {/* </SimpleGrid> */}
      </SimpleGrid>
    </>
  );
}
