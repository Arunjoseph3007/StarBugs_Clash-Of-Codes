import { Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

function groupid() {
  async function createroom() {
    try {
      let url = "https://api.whereby.dev/v1/meetings";
      let API_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjc3OTI0NzIzLCJvcmdhbml6YXRpb25JZCI6MTc5NjQ3LCJqdGkiOiJjMjg5YjlmYS05YTM5LTQxNmYtODU0MC1hOTFkZDZmOWY5ZDUifQ.ENiPCQJeaohvoyn1Qlm1tcki88joCLR7oCwytxVBA7I";
      let config = {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      };
      let body = {
        templateType: "viewerMode",
        isLocked: false,
        roomNamePrefix: "example-prefix",
        roomNamePattern: "uuid",
        roomMode: "normal",
        endDate: "2023-03-08T14:15:22Z",
        fields: ["hostRoomUrl"],
      };
      const res = await axios.post(url, body, config);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="teal" size="lg" onClick={createroom}>
        Create Room
      </Button>
    </Stack>
  );
}

export default groupid;
