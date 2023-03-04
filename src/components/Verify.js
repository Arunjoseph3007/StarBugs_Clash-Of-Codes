import {
<<<<<<< HEAD
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box,
    Button,
  } from "@chakra-ui/react";
  import { CloseIcon } from "@chakra-ui/icons";
  import React from "react";
  
  export default function Verify({ show, close }) {
    if (!show) {
      return null;
    }
    return (
      <>
        <FormControl bgColor={"gray.200"} width={"50vw"} as="Center" p={"10px"} m='5px'>
        <CloseIcon onClick={close} display='inline' position={'absolute'} left='95%'p={'2px'}/>
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
              <FormLabel display={"inline"}>Upload image</FormLabel>
              <Input type={"file"} w="20vw" />
            </Box>
          </Stack>
          <Button colorScheme="facebook" w={"10vw"} type="submit" my={'2px'}>
            Submit
          </Button>
        </FormControl>
      </>
    );
  }
  
=======
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import axios from "axios";

export default function Verify({ show, close }) {
  const [imageDetails, setImageDetails] = useState(null);
  const [aadharDetails, setAadharDetails] = useState("");
  function uploadImage() {
    let file = document.getElementById("fileInput2").files[0];
    if (file)
      setImageDetails( file );
  }
  if (!show) {
    return null;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('addharnumber', aadharDetails);
    if (imageDetails)
    data.append("file", imageDetails);
    try {
      let headers = {
        "Content-Type": "multipart/form-data" ,
        Authorization: "Token " + localStorage.getItem("token"),
      };
      let response = await axios.post(
        "http://coctrinity.pythonanywhere.com/login/addhar-create",
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
              value={aadharDetails}
              onChange={(e) => setAadharDetails(e.target.value)}
            />
          </Box>

          <br />
          <Box>
            <FormLabel display={"inline"} px={'5px'}>Upload image</FormLabel>
            <input
                  name="photo"
                  id="fileInput2"
                  accept="image/*"
                  className="hidden"
                  type="file"
                  onChange={uploadImage}
                />
          </Box>
        </Stack>
        <Button colorScheme="facebook" w={"10vw"} type="submit" my={"2px"} onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </>
  );
}
>>>>>>> 220a552b81d9820544f98fddb52d5e3553081574
