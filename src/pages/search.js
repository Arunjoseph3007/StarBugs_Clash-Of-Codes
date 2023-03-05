import {
  Input,
  Box,
  Button,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import SearchPageGrid from "../components/SearchPageGrid";
import SearchPageGroups from "../components/SearchPageGroups";
import Navbar from "@/components/Navbar";


export default function SearchPage() {
  const [isLocation, setIsLocation] = useState(true);
  return (
    <Box colorScheme="facebook" p="10px"  >
      <Navbar />
      <Container maxW={'7xl'}>
      <Tabs isFitted variant='enclosed' >
        <TabList maxW={'7xl'} >
          <Tab display={"block"}>Groups</Tab>
          <Tab display={"block"}>Locations</Tab>
          
        </TabList>

        <TabPanels h={"75vh"} overflowY={"scroll"} >
          <TabPanel>
          <SearchPageGroups isLocation={!isLocation} />
          </TabPanel>
          <TabPanel >
          <SearchPageGrid isLocation={isLocation} />
          </TabPanel>
        
        </TabPanels>
      </Tabs>
      </Container>
      
      
    </Box>
  );
}
