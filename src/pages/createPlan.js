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
  Icon,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineLocationCity,
  MdOutlineInvertColors,
  MdOutlineAttachMoney,
} from "react-icons/md";
import Select from "react-select";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack flex={1} direction={"row"} align={"center"}>
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

export default function CreatePlan() {
  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", tripDetails.name);
    data.append("source", tripDetails.source);
    data.append("destination", tripDetails.dest);
    data.append("time", tripDetails.date.endDate.toDateString());
    data.append("start_date", tripDetails.date.endDate.toDateString());
    data.append("budget", tripDetails.budget);
    data.append("description", tripDetails.desc);
    data.append("slogan", tripDetails.shortDesc);
    data.append("no_of_people", tripDetails.noOfPeople);
    data.append("travel_mode", tripDetails.mode.value);
    data.append("image", tripDetails.img);

    const res = await axios.post(
      "http://coctrinity.pythonanywhere.com/login/group-create",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      }
    );
    router.push(`/group/${res.data.id}`);
    console.log(res.data);
  };

  const upload = (e) => {
    setTripDetails((p) => ({ ...p, img: e.target.files[0] }));
  };

  const handleGetPlan = async (e) => {
    setLoading(true);

    // const [attr, hot, tPlan] = [{ data: [] }, { data: [] }, "this is the plan"];
    const [attr, hot, tPlan] = await Promise.all([
      getAttractions(tripDetails.dest),
      getHotels(tripDetails.dest),
      getTravelPlan(2, tripDetails.source, tripDetails.dest),
    ]);

    console.log({ attr: attr.data[0], hot: hot.data[0] });
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
    { value: "road", label: "By Road" },
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
            <Container maxW="750px">
              <Flex mt={6} gap={5}>
                <Feature
                  text={tripDetails.source}
                  icon={
                    <Icon as={MdLocationOn} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={"yellow.100"}
                />
                <Feature
                  text={tripDetails.dest}
                  icon={<Icon as={BsFillCalendarDateFill} w={5} h={5} />}
                  iconBg="purple.100"
                />
              </Flex>
              <Flex mt={6} gap={5}>
                <Feature
                  text={
                    tripDetails.date.startDate.toDateString() +
                    "-" +
                    tripDetails.date.endDate.toDateString()
                  }
                  icon={
                    <Icon
                      as={MdOutlineLocationCity}
                      color={"green.700"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg="green.100"
                />
                <Feature
                  text={tripDetails.mode.label}
                  icon={<Icon as={MdOutlineInvertColors} w={5} h={5} />}
                  iconBg="blue.100"
                />
              </Flex>
              <Flex mt={6} gap={5}>
                <Feature
                  text={tripDetails.noOfPeople + " expected Travellers"}
                  icon={<Icon as={FaUsers} w={5} h={5} />}
                  iconBg={"red.100"}
                />
                <Feature
                  text={"₹ " + tripDetails.budget}
                  icon={<Icon as={MdOutlineAttachMoney} w={5} h={5} />}
                  iconBg="teal.100"
                />
              </Flex>
            </Container>
          )}
          {tripDetails.desc && !loading && planReady && (
            <Flex mt={6} gap={5} direction="column">
              <Flex mt={6} gap={5}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Great India Trek"
                    rows={8}
                    name="name"
                    value={tripDetails.name}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input onChange={upload} rows={8} name="img" type="file" />
                </FormControl>
              </Flex>
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

              <FormControl>
                <FormLabel>Plan</FormLabel>
                <Textarea
                  rows={8}
                  name="desc"
                  value={tripDetails.desc}
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
