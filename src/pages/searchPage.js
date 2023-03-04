import { Input, Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import SearchPageGrid from "../components/SearchPageGrid";
import SearchPageGroups from "../components/SearchPageGroups";
import Navbar from "@/components/Navbar";

export default function SearchPage() {
  const [isLocation, setIsLocation] = useState(true);
  return (
    <Box colorScheme="facebook" p="10px">
      <Navbar/>
      <Center>
        <Input placeholder="Type here to search" w="40vw" />
        <Button colorScheme={"facebook"} m="10">
          Submit
        </Button>
      </Center>
      <Center>
        <Button
          colorScheme="facebook"
          variant="link"
          m="5"
          onClick={() => {
            setIsLocation(true);
          }}
        >
          Location
        </Button>
        <Button
          colorScheme="facebook"
          variant="link"
          onClick={() => {
            setIsLocation(false);
          }}
        >
          Groups
        </Button>
      </Center>
      <SearchPageGrid isLocation={isLocation} />
      <SearchPageGroups isLocation={isLocation} />
    </Box>
  );
}
