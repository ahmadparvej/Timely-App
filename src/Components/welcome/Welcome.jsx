import React from 'react'
import "./welcome.css"

import {
   Text,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Flex,
    Button,
    Stack
   
  } from "@chakra-ui/react";
  import { Search2Icon,InfoIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <div>
       <div className='welcomediv'>
        <Heading color="#596063" fontSize="20px">Welcome to Timely!</Heading>
        <Text marginTop="5%" color="#596063" fontWeight="medium">Let’s put your stamp on the place—starting with naming your workspace.</Text>
        <br/>
        <Text color="#596063" fontWeight="medium">Company name  {<InfoIcon color='gray.300' />} </Text>
        <br/>
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='tel' placeholder='Phone number' value="shristi" borderColor='grey' />
  </InputGroup>
  <br/>
  <Text color="#596063" fontWeight="medium">Who's using Timely?  {<InfoIcon color='gray.300' />} </Text>
  <br/>
<div className='btndiv'>
    <div>just me</div>
    <div> 2-19 people</div>
    <div className='btn3'> 20 people or more</div>
</div>
       </div>
    <br/>
    <Stack>
            
                <Button 
                 margin={"auto" } 
                  bg={'blue.400'}
                  color={'white'}
                  w={"80%"}
                  _hover={{
                    bg: 'green.500',
                    w:"80%"
                  }}
                  onClick={()=>navigate("/dashboard")}
                  >
               Next{<ArrowForwardIcon  />}
                </Button>
              </Stack>
            

      </div>
      {/* ********************** */}
      <div>
  
        <img className="welimg" src="https://dou6see51s3xi.cloudfront.net/images/workspace_details-aea830517eac51ebac8d1d5a00f35f1d.png"
        />
           <div className="center">shristi</div>
      </div>
    </div>
  )
}

export default Welcome

