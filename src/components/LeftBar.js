import { EmailIcon, SettingsIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

export default function LeftBar() {
  return (
    <Flex alignItems="flex-start" flexDir="column" gap={4} p={4}>
      <Button variant="ghost" leftIcon={<EmailIcon />}>
        Home
      </Button>
      <Button variant="ghost" leftIcon={<EmailIcon />}>
        Contact
      </Button>
      <Button variant="ghost" leftIcon={<EmailIcon />}>
        About
      </Button>
      <Button variant="ghost" leftIcon={<EmailIcon />}>
        Feed
      </Button>
      <Button variant="ghost" leftIcon={<EmailIcon />}>
        Chat
      </Button>
      <Button leftIcon={<SettingsIcon />} colorScheme="facebook" bg="#0652cf" rounded="full">
        Share
      </Button>
    </Flex>
  );
}
