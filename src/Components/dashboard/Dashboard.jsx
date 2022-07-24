import React,{useState} from "react";
import { Stack, Text, Flex, HStack, Box, Heading, Button, Icon, Input} from "@chakra-ui/react";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { ProfileMenu } from "./ProfileMenu";
import { AddProjectModal } from './AddProjectModal';
import { useTimer } from './../../Hooks/useTimer';


export const Dashboard = () => {
  const [toggleTimer, setToggleTimer] = useState(true)
  const [tasks, setTasks] = useState([])
  const handleTasks=(newTask)=>{
    setTasks([...tasks,newTask])
  }
  const handleTimer=()=>{
    if(toggleTimer){
      start();
    }else{
      stop();
    }
    setToggleTimer(!toggleTimer)
  }
  const {start,stop,countDown} = useTimer(0)
  return (
    <Stack w="90%" m="1rem" gap="1rem">
      <Flex minWidth="max-content" justifyContent="space-between">
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </HStack>
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>{"<"}</Button>
          <Input
            placeholder="Select Date and Time"
            size="md"
            backgroundColor="#ffffff"
            type="datetime-local"
          />
          <Button>{">"}</Button>
        </HStack>
        <HStack>
          <Heading as="h4" size="md">
            0h - ₹0
          </Heading>
        </HStack>
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>Solo</Button>
          <Button>Company</Button>
        </HStack>
        <Stack border="2px solid #e7e9eb" borderRadius="4px">
          <ProfileMenu />
        </Stack>
      </Flex>
      <HStack gap="1rem" w="100%" justifyContent="space-between">
        <Stack
          w="45%"
          h="100vh"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          borderRadius="8px"
          gap="1rem"
        >
          <Stack color="grey" gap="0.5rem" borderBottom="1px solid grey" p="1rem">
          <HStack><Heading as="h4" size="sm">Timesheet</Heading>
          <Icon as={BsFillInfoCircleFill}/></HStack>
          <Heading as="h4" size="md">0h</Heading>
          </Stack>
          <Stack p="1rem">
          {tasks.map((el,index)=>{
            return <Box key={index} bg="#f2f2f2" p="8px" borderRadius="5px">
              <Stack bg={el.singColor} p="8px" borderRadius="5px" color="white">
                <Heading as="h4" size="sm">{el.title}</Heading>
                <Flex><Heading as="h4" size="xs">{el.projectName}</Heading><Icon as={GoPrimitiveDot}/><Heading as="h4" size="xs">{el.client}</Heading></Flex>
                <Flex justify="space-between">
                  <Heading as="h4" size="xs" color="black">${el.price}</Heading>
                  <Stack>
                  <Heading as="h3" size="md" fontWeight="100px">{countDown.hrs}h {countDown.mins}m {countDown.secs}s</Heading>
                  {toggleTimer?<Button bg='#44505e' size='xs' onClick={handleTimer}>Timer</Button>:<Button colorScheme='yellow' size='xs' onClick={handleTimer}>Pause</Button>}      
                  </Stack>
                </Flex>
              </Stack>
              <Text color="grey">No memories</Text>
            </Box>
          })}
          <AddProjectModal handleTasks={handleTasks}/>
          </Stack>
        </Stack>
        <Stack
          w="55%"
          h="100vh"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          borderRadius="8px"
          gap="1rem"
        >
          <Stack color="grey" gap="0.5rem" borderBottom="1px solid grey" p="1rem">
          <HStack><Heading as="h4" size="sm">Authomatic time tracking</Heading>
          <Icon as={BsFillInfoCircleFill}/></HStack>
          </Stack>
        </Stack>
      </HStack>
    </Stack>
  );
};
