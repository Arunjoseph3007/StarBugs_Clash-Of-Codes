import React from 'react'
import {
    Card,
    SimpleGrid,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Button,
    Text,
    Container,
    Image,
    Flex,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { useRouter } from 'next/router';
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
function GroupCard({
    Name= "Mera Desh Tour",
    Source= "Mumbai",
    Destination= "Kutch",
    Details=
      "Padharo maare dessh presents Kutch tour for all DJites, Come with us and have fun.",
    imageurl= "/kutch.png",
    id=1,
  }) {
    const router = useRouter();
    
    function gotoFunction() {
        router.push(`/group/${id}`);
      }
  return (
    <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageurl}
          alt="Location Image"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{Name}</Heading>

            <Text py="2">{Details}</Text>
            <Feature
              icon={<Icon as={MdLocationOn} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"From " + Source}
            />
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
              text={"To " + Destination}
            />
            <Button variant="solid" colorScheme="blue" mt={"10px"} onClick={gotoFunction}>
              Check
            </Button>
            
          </CardBody>

          
        </Stack>
      </Card>
  )
}

export default GroupCard
