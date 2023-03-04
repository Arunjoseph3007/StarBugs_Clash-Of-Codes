import CreatePlanTabs from "@/components/CreatePlanTabs";
import Navbar from "@/components/Navbar";
import { getAttractions } from "@/utils/getAttractions";
import { getHotels } from "@/utils/getHotels";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Select from "react-select";

export default function CreatePlan() {
  const [planReady, setPlanReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tripDetails, setTripDetails] = useState({
    source: "",
    dest: "",
    date: { startDate: new Date(), endDate: new Date(), key: "selection" },
    noOfPeople: 2,
    budget: null,
    mode: null,
  });
  const [attractions, setAttractions] = useState([]);
  const [hotels, setHotels] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const attr = await getAttractions(tripDetails.dest);
    const hot = await getHotels(tripDetails.dest);

    console.log({ attr, hot });
    setHotels(hot.data);
    setAttractions(attr.data);
    setPlanReady(true);
    setLoading(false);
  };

  const handleChange = (e) => {
    setTripDetails((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const options = [
    { value: "train", label: "Train" },
    { value: "byRoad", label: "By Road" },
    { value: "plane", label: "Plane" },
  ];

  function handleSelect(ranges) {
    setTripDetails((p) => ({ ...p, date: ranges.selection }));
  }

  return (
    <Box>
      <Navbar />
      <Box minH="100vh" py={20}>
        <Container
          onSubmit={handleSubmit}
          as="form"
          py={4}
          bg="white"
          maxW="800px"
          rounded="md"
        >
          <Heading my={4} textAlign="center" fontFamily="Poppins">
            Create a Plan
          </Heading>
          <hr />
          <Flex mt={6} gap={5}>
            <FormControl>
              <FormLabel>Source</FormLabel>
              <Input
                name="source"
                onChange={handleChange}
                value={tripDetails.source}
                placeholder="eg. Dombivli, Maharashtra"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Destination</FormLabel>
              <Input
                value={tripDetails.dest}
                onChange={handleChange}
                name="dest"
                placeholder="New Delhi"
              />
            </FormControl>
          </Flex>
          <Flex mt={6} gap={5}>
            <FormControl flex={1}>
              <FormLabel>Date of Journey</FormLabel>
              <Box border="1px" borderColor="gray.200" rounded="lg">
                <DateRangePicker
                  ranges={[tripDetails.date]}
                  onChange={handleSelect}
                  showDateDisplay={false}
                />
              </Box>
            </FormControl>
            <Flex
              flex={1}
              justifyContent="space-between"
              direction="column"
              gap={4}
            >
              <FormControl>
                <FormLabel>No of People</FormLabel>
                <Input
                  value={tripDetails.people}
                  onChange={handleChange}
                  name="noOfPeople"
                  type="number"
                  placeholder="eg. 6, 8"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Estimated Budget</FormLabel>
                <Input
                  value={tripDetails.budget}
                  onChange={handleChange}
                  name="budget"
                  type="number"
                  placeholder="Budget"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mode of transport</FormLabel>
                <Select
                  value={tripDetails.mode}
                  onChange={(e) => setTripDetails((p) => ({ ...p, mode: e }))}
                  options={options}
                />
              </FormControl>
              <Button
                leftIcon={loading && <Spinner />}
                isDisabled={loading}
                type="submit"
                colorScheme="facebook"
                rounded="full"
              >
                Get A Plan
              </Button>
            </Flex>
          </Flex>
        </Container>

        <CreatePlanTabs
          planReady={planReady}
          attractions={attractions}
          hotels={hotels}
          loading={loading}
          gpt="123"
        />
      </Box>
    </Box>
  );
}
