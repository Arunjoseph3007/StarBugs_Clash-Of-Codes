import {
    Card,
    SimpleGrid,
    CardBody,
    CardFooter,
  } from "@chakra-ui/react";

export default function SearchPageGrid({isLocation}) {
  if(!isLocation){
    return null
  }
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px" bg='blue.700'>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 1
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 2
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 3
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 4
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 5
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 6
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 7
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 8
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 9
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 10
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 11
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
        <Card bg="blue.700" color='white'>
          <CardBody>
            <img src={"scenery.png"} alt="scenery" />
            Place 12
          </CardBody>
          <CardFooter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            numquam.
          </CardFooter>
        </Card>
      </SimpleGrid>
  )
}
