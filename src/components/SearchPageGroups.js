import { List, ListItem, Box, Flex, Center} from "@chakra-ui/react";

export default function SearchPageGroups({isLocation}) {
  const imgStyles = {
    height: "100%",
    width: "30px",
    display: "inline-block",
    borderRadius: "50%",
    border: "1px solid black",
    position: "relative",
    top: "10px"
  };
  if(isLocation){
    return null
  }

  return (
    <Flex justify="center" align="center" direction="column">
      <List spacing={3} fontSize='2xl' bgColor='blue.100' p='10px' w='50vw' h='70vh'>
        <ListItem bgColor='blue.50' as={Flex} justify='center' >
          <img
            src={"group-thumbnail.png"}
            style={imgStyles}
          />
          <Box display="inline" m='5px'>Group 1</Box>
        </ListItem>
        <ListItem bgColor='blue.50' as={Flex} justify='center'>
          <img
            src={"group-thumbnail.png"}
            style={imgStyles}
          />
          <Box display="inline" m='5px'>Group 2</Box>
        </ListItem>
        <ListItem bgColor='blue.50' as={Flex} justify='center'>
          <img
            src={"group-thumbnail.png"}
            style={imgStyles}
          />
          <Box display="inline" m='5px'>Group 3</Box>
        </ListItem>
        <ListItem bgColor='blue.50' as={Flex} justify='center'>
          <img
            src={"group-thumbnail.png"}
            style={imgStyles}
          />
          <Box display="inline" m='5px'>Group 4</Box>
        </ListItem>
        <ListItem bgColor='blue.50' as={Flex} justify='center'>
          <img
            src={"group-thumbnail.png"}
            style={imgStyles}
          />
          <Box display="inline" m='5px'>Group 5</Box>
        </ListItem>
        <ListItem bgColor='blue.50' as={Flex} justify='center'>
          <img src={"group-thumbnail.png"} style={imgStyles} />
          <Box display="inline" m='5px'>Group 6</Box>
        </ListItem>
      </List>
    </Flex>
  );
}
