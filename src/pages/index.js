import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import WithSubnavigation from '@/components/LandingNavbar';
import WithSpeechBubbles from '@/components/testimonals';
import Footer from '@/components/footer';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <WithSubnavigation/>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 20, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'#0652cf'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                
                
                zIndex: -1,
              }}>
              Journey to
            </Text>
            <br />
            <Text as={'span'} color={'#0652cf'}>
              Your Dreams
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Chal Mere Yaar is a one stop solution for the ones who never stop exploring. Create plans, make new travel buddies and get a wholesome experience out of all your trips wit us.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'#0652cf'}
              bg={'#0652cf'}
              _hover={{ bg: '#0652cf' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'500px'}
            rounded={'2xl'}
            // boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'girlWalking.gif'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <WithSpeechBubbles/>
      <Footer/>
    </Container>
  );
}

