import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import style from "./signup.module.css"

 
  
  export default function SimpleCard({setNext}) {

    const handlesubmit=()=>{
        console.log("yes")
        setNext(true)
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'5xl'} color={"grey"}>Sign up to Timely</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account? <Link color={'green.400'}> Log In</Link> ✌️
            </Text>
          </Stack>
          <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={10}>
            <Stack spacing={4}>
            <FormControl id="none">
                
            <button className={style.button}><img src="https://d1vbcromo72rmd.cloudfront.net/assets/google_signin-6602e1ab80424c019aaf360ab651d857464162176c58eb0b2f64b503b99c16b7.svg" /> <div>Sign up with Google</div></button>
              </FormControl>
              <FormControl id="none">
                
                <button className={style.button}><img src="https://d1vbcromo72rmd.cloudfront.net/assets/left-black-logo-large-be9b8d1a6be1718debaab0c55cd606338e2724b4ca71f2d0266f9d3df13fc996.svg"/><div>Sign up with Apple</div></button>
                  </FormControl>
              <FormControl id="email" >
                <FormLabel> Work Email</FormLabel>
                <Input type="email"  />
              </FormControl>
              <FormControl id="name">
                <FormLabel> Full Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
              <Stack align={'center'}>
         
            <Text fontSize={'lg'} color={'gray.600'}>
            By signing up you agree to the <Link color={'green.400'}> Terms of Service.</Link> 
            </Text>
          </Stack>
                <Button  onClick={handlesubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Start free 14-day trial
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }