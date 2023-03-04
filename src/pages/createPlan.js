import CreatePlanTabs from "@/components/CreatePlanTabs";
import Navbar from "@/components/Navbar";
import { getAttractions } from "@/utils/getAttractions";
import { getHotels } from "@/utils/getHotels";
import { getTravelPlan } from "@/utils/getTravelPlan";
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
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { FaHome } from "react-icons/fa";
import Select from "react-select";

export default function CreatePlan() {
  const [planReady, setPlanReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [travelPan, setTravelPlan] = useState("");
  const [tripDetails, setTripDetails] = useState({
    name: "",
    source: "",
    dest: "",
    date: { startDate: new Date(), endDate: new Date(), key: "selection" },
    noOfPeople: 2,
    budget: null,
    mode: null,
    desc: "",
    shortDesc: "",
    img: null,
  });
  const [attractions, setAttractions] = useState([]);
  const [hotels, setHotels] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //post api
  };

  const handleGetPlan = async (e) => {
    setLoading(true);

    const [attr, hot, tPlan] = [{ data: [] }, { data: [] }, "this is the plan"];
    // const [attr, hot, tPlan] = await Promise.all([
    //   getAttractions(tripDetails.dest),
    //   getHotels(tripDetails.dest),
    //   getTravelPlan(2, tripDetails.source, tripDetails.dest),
    // ]);

    console.log({ attr, hot });
    setHotels(hot.data);
    setAttractions(attr.data);
    setTravelPlan(tPlan);
    setPlanReady(true);
    setTripDetails((p) => ({ ...p, desc: tPlan }));
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
          {!planReady ? (
            <>
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
                      onChange={(e) =>
                        setTripDetails((p) => ({ ...p, mode: e }))
                      }
                      options={options}
                    />
                  </FormControl>
                  <Button
                    leftIcon={loading && <Spinner />}
                    isDisabled={loading}
                    type="button"
                    onClick={handleGetPlan}
                    colorScheme="facebook"
                    rounded="full"
                  >
                    Get A {planReady && "New"} Plan
                  </Button>
                </Flex>
              </Flex>
            </>
          ) : (
            <>
              <Flex mt={6} gap={5}>
                <Flex gap={2} flex={1} alignItems="center">
                  <FaHome /> <Text fontWeight='medium'>{tripDetails.source}</Text>
                </Flex>
                <Flex gap={2} flex={1} alignItems="center">
                  <FaHome /> <Text>{tripDetails.dest}</Text>
                </Flex>
              </Flex>
            </>
          )}
          {tripDetails.desc && !loading && planReady && (
            <Flex mt={6} gap={5} direction="column">
              <FormControl>
                <FormLabel>Plan</FormLabel>
                <Textarea
                  rows={8}
                  name="desc"
                  value={tripDetails.desc}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Short Description</FormLabel>
                <Input
                  placeholder=""
                  rows={8}
                  name="shortDesc"
                  value={tripDetails.shortDesc}
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme="facebook" type="submit">
                Create Plan
              </Button>
            </Flex>
          )}
        </Container>

        <CreatePlanTabs
          planReady={planReady}
          attractions={attractions}
          hotels={hotels}
          loading={loading}
          gpt={travelPan}
        />
      </Box>
    </Box>
  );
}
