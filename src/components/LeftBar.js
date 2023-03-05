import {
  EmailIcon,
  Icon,
  PhoneIcon,
  SearchIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FaMapMarked, FaUserAlt } from "react-icons/fa";
import { GiPackedPlanks } from "react-icons/gi";

export default function LeftBar() {
  return (
    <Flex alignItems="flex-start" flexDir="column" gap={4} p={4}>
      <Button variant="ghost" leftIcon={<Icon as={FaUserAlt} />}>
        <Link href="/profile">Edit Profile</Link>
      </Button>
      <Button variant="ghost" leftIcon={<PhoneIcon />}>
        <Link href="/contactus">Contact</Link>
      </Button>
      <Button variant="ghost" leftIcon={<SearchIcon />}>
        <Link href="/search">Search</Link>
      </Button>
      <Button variant="ghost" leftIcon={<Icon as={FaMapMarked} />}>
        <Link href="/map">Map</Link>
      </Button>
      
      <Button
        leftIcon={<Icon color="white" as={GiPackedPlanks} />}
        colorScheme="facebook"
        bg="#0652cf"
        rounded="full"
      >
        <Link href="/createPlan">Create Plan</Link>
      </Button>
    </Flex>
  );
}
