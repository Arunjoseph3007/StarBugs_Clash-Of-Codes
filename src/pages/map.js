import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Switch,
  Text,
} from "@chakra-ui/react";
import Map from "@/components/Map";
import { useEffect, useState } from "react";

const HOTELS = [
    {
      type: "Feature",
      properties: {
        title: "Lincoln Park",
        description: "A northside park that is home to the Lincoln Park Zoo",
        image:
          "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
      },
      geometry: {
        coordinates: [-87.637596, 41.940403],
        type: "Point",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Burnham Park",
        description: "A lakefront park on Chicago's south side",
        image:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
      },
      geometry: {
        coordinates: [-87.603735, 41.829985],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Millennium Park",
        description:
          "A downtown park known for its art installations and unique architecture",
        image:
          "https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg",
      },
      geometry: {
        coordinates: [-87.622554, 41.882534],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Grant Park",
        description:
          "A downtown park that is the site of many of Chicago's favorite festivals and events",
        image:
          "https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg",
      },
      geometry: {
        coordinates: [-87.619185, 41.876367],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Humboldt Park",
        description: "A large park on Chicago's northwest side",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
      },
      geometry: {
        coordinates: [-87.70199, 41.905423],
        type: "Point",
      },
    },
  ],
  USES = [
    {
      type: "Feature",
      properties: {
        title: "Douglas Park",
        description: "Have stories to tell not stuff to show",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      geometry: {
        coordinates: [-87.699329, 41.860092],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "John Snow",
        description: "I haven't been everywhere, but it's on my list",
        image:
          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=824",
      },
      geometry: {
        coordinates: [-87.530221, 41.715515],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "Harry Potter",
        description:
          "The journey of a thousand miles begins with a single step",
        image:
          "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
      },
      geometry: {
        coordinates: [-87.580389, 41.783185],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        title: "John Doe",
        description: "Love wandering in the forest",
        image:
          "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
      },
      geometry: {
        coordinates: [-87.769775, 41.873683],
        type: "Point",
      },
    },
  ];

export default function MapScreen() {
  const [hotels, setHotels] = useState(HOTELS);
  const [friends, setFriends] = useState(USES);
  const [selHotel, setSelHotel] = useState(null);
  const [isH, setIsH] = useState(true);

  return (
    <Flex h="100vh">
      <Box w="35vw">
        <Container py={2} bg="#0652cf" color="white">
          <Text fontWeight="bold" fontSize={22}>
            Search
          </Text>
        </Container>
        <Box p={2}>
          <HStack mb={2}>
            <Switch isChecked={isH} onChange={(e) => setIsH((p) => !p)} />
            <Text>{isH ? "Locations" : "Friends"}</Text>
          </HStack>
          {selHotel && (
            <Container
              py={4}
              shadow="xl"
              border="1px"
              borderColor="gray.100"
              rounded="md"
            >
              <Image
              objectFit='cover'
                rounded={isH ? "md" : "full"}
                style={{ aspectRatio: !isH && 1 }}
                src={selHotel.properties.image}
              />
              <Heading my={2} fontFamily="Poppins">
                {selHotel.properties.title}
              </Heading>
              <Text>{selHotel.properties.description}</Text>
            </Container>
          )}
        </Box>
      </Box>
      <Map setSelHotel={setSelHotel} hotels={isH ? hotels : friends} />
    </Flex>
  );
}
