import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

export default function Verify({ show, close }) {
  const [imageDetails, setImageDetails] = useState(null);
  function uploadImage() {
    let file = document.getElementById("fileInput").files[0];
    if (file)
      setImageDetails( file );
  }
  if (!show) {
    return null;
  }
  async function handleSubmit(params) {
    let data = new FormData();
    if (imageDetails)
    data.append("profile_pic", imageDetails);
    try {
      let headers = {
        "Content-Type": "multipart/form-data" ,
        Authorization: "Token " + localStorage.getItem("token"),
      };
      let response = await axios.post(
        "https://coctrinity.pythonanywhere.com/login/",
        data,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setImageDetails(null);
    }
  }
  return (
    <>
      <FormControl
        bgColor={"gray.200"}
        width={""}
        rounded="md"
        as="Center"
        p={"10px"}
        m="5px"
      >
        <CloseIcon
          onClick={close}
          display="inline"
          position={"absolute"}
          left="95%"
          p={"2px"}
        />
        <Stack>
          <Box>
            <FormLabel display={"inline"}>Aadhar Number</FormLabel>
            <Input
              type={"number"}
              placeholder="Aadhar number"
              w="20vw"
              bgColor={"white"}
            />
          </Box>

          <br />
          <Box>
            <FormLabel display={"inline"} px={'5px'}>Upload image</FormLabel>
            <input
                  name="photo"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={uploadImage}
                />
          </Box>
        </Stack>
        <Button colorScheme="facebook" w={"10vw"} type="submit" my={"2px"}>
          Submit
        </Button>
      </FormControl>
    </>
  );
}
