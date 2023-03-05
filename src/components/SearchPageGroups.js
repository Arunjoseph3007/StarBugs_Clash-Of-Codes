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
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import {  LockIcon, SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import GroupCard from "./GroupCard";

export default function SearchPageGroups({ isLocation }) {
  const router = useRouter();
  if (isLocation) {
    return null;
  }
  
  const [allGroups,setAllGroups]= useState([])
  const [groupDetails, setGroupDetails] = useState({
    Name: "Mera Desh Tour",
    Source: "Mumbai",
    Destination: "Kutch",
    Details:
      "Padharo maare dessh presents Kutch tour for all DJites, Come with us and have fun.",
    imageurl: "/kutch.png",
    id:1,
  });
  async function getPlan() {
    try {
      let headers = {
        "Content-Type": "multipart/form-data" ,
        Authorization: "Token " + localStorage.getItem("token"),
      };
      var res =await axios.get(`https://coctrinity.pythonanywhere.com/login/group-create`,{headers})
      setAllGroups(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [key, setKey] = useState("");
  useEffect(()=>{getPlan()},[])
  async function searchGroup(params) {
    try {
      let headers = {
        "Content-Type": "multipart/form-data" ,
        Authorization: "Token " + localStorage.getItem("token"),
      };
      var res =await axios.get(`http://coctrinity.pythonanywhere.com/login/single-group?query=${key}`,{headers})
      setAllGroups(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <Flex alignContent={"center"} justifyContent={"center"} my={"20px"}>
      <InputGroup width={"70%"}>
        
        <Input rounded="full" placeholder="Search..." value={key} onChange={(e) => setKey(e.target.value)}/>
        <InputRightElement>
          <SearchIcon onClick={searchGroup} />
        </InputRightElement>
      </InputGroup>
        </Flex> 
    <SimpleGrid spacing="40px">
      {allGroups?(allGroups.map((g)=>{return <GroupCard Name={g.name} Source={g.source} Destination={g.destination} imageurl={g.image} id={g.id}/>})):(<Container></Container>)}
      
    </SimpleGrid>
    </>
  );
}
