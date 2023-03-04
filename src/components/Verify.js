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
>>>>>>> 220a552b81d9820544f98fddb52d5e3553081574
