import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Map from "@/components/Map";
import axios from "axios";
import { useEffect } from "react";

const getRestaurants = async (bounds) => {
  return [];
  /**
   * bl sw
   * tr ne
   */
  const url =
    "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
  const options = {
    method: "GET",
    params: {
      bl_latitude: bounds?._sw.lat || "11.847676",
      tr_latitude: bounds?._ne.lat || "12.838442",
      bl_longitude: bounds?._sw.lng || "109.095887",
      tr_longitude: bounds?._ne.lng || "109.149359",
    },
    headers: {
      "X-RapidAPI-Key": "3af18041c3msha1b256bea39427cp17010ajsnb89051bb00ac",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.get(url, options);
    console.log(res.data.data);
    console.log(res.data.data[0]);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default function MapScreen() {
  // const [hotels,setHotels]
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Flex h="100vh">
      <Box w="25vw">
        <Container py={2} bg="#0652cf" color="white">
          <Text fontWeight="bold" fontSize={22}>
            Search
          </Text>
        </Container>
      </Box>
      <Map />
    </Flex>
  );
}
