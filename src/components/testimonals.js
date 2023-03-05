import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} mt={10} mb={20} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What our users tell about us</Heading>
          <Text>We have users all over the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great for exploring new places</TestimonialHeading>
              <TestimonialText>
              Thanks to Chal Mere Yaar, I was able to explore a new city and experience its unique culture in the best way possible.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'Person1.png'
              }
              name={'Benjamin Davis'}
              // title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Makes planning trips smooth</TestimonialHeading>
              <TestimonialText>
              I had the trip of a lifetime thanks to Chal Mere Yaar. From start to finish, everything was perfect and I can't wait to plan my next trip.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'Person2.png'
              }
              name={'Aarav Gupta'}
              // title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Find new travel buddies effortlessly</TestimonialHeading>
              <TestimonialText>
                I recently went on a trip with like-minded travel buddies paired by Chal Mere Yaar.The pairings were perfect. It was as if I was travelling with my own friends.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'Person3.png'
              }
              name={'Emily Williams'}
              // title={'CEO at ABC Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}