import { Input, VStack, Stack, Select, Icon, HStack, Heading, Box } from '@chakra-ui/react';

import { FaArrowsAltH, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from 'react';
import { useTimer } from './../../Hooks/useTimer';

import {Modal, ModalOverlay,ModalContent, ModalFooter, ModalBody, Button, useDisclosure} from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from 'axios';

export function AddProjectModal({handleTasks}) {
    const [projects, setProjects] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [toggleTimer, setToggleTimer] = useState(true)
    const [initTime, setInitTime] = useState(0)
    const {start,stop,countDown} = useTimer(initTime)

    const [title, setTitle] = useState("")
    const [selectProject, setSelectProject] = useState("")

    const handleSubmit = ()=>{
      let obj = projects.filter((el)=>el.projectName===selectProject);
      let payload = {...obj[0],title,price:15}
      handleTasks(payload)
      onClose()
    }
    const handleTimer=()=>{
      if(toggleTimer){
        start();
      }else{
        stop();
      }
      setToggleTimer(!toggleTimer)
    }

    useEffect(()=>{
      axios.get("https://evening-castle-55317.herokuapp.com/user/projects").then((res)=>setProjects(res.data))
    },[])
    return (
      <>
      <Button background="#3d73da" color="white" p="25px" _hover={{background:"blue"}} onClick={onOpen}>New Entry</Button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#eff1f2">
            <ModalBody my="15px">
                  <VStack gap="10px" background="white" p="10px">
                        <Input placeholder="Add a note for this work" onChange={(e)=>setTitle(e.target.value)}/>
                        <Select placeholder='Select Project' onChange={(e)=>setSelectProject(e.target.value)}>
                            {projects.map((el,index)=>{
                              return <option key={index} value={el.projectName} style={{background:el.singColor}}>
                                {el.projectName} ({el.client})
                              </option>
                            })}
                        </Select>
                        <Stack w="100%" background="rgb(204, 204, 204)" p="10px">
                            <Heading as="h3" size="sm" fontWeight="500">Logged time</Heading>
                            <HStack justify="space-between">
                                <Heading as="h3" size="md">{countDown.hrs}h {countDown.mins}m {countDown.secs}s</Heading>
                                <HStack>
                                    <Button onClick={()=>setInitTime(900)}>15m</Button>
                                    <Button onClick={()=>setInitTime(1800)}>30m</Button>
                                    <Button onClick={()=>setInitTime(3600)}>1h 00m</Button>
                                </HStack>
                            </HStack>
                        </Stack>
                        <Stack w="100%" p="10px">
                            <HStack justify="space-between">
                                <HStack>
                                    <Box><Icon as={FaArrowsAltH}/>{"From & To"}</Box>
                                    <Box><Icon as={MdOutlineWatchLater}/>
                                    {toggleTimer?<Button colorScheme='gray' size='xs' onClick={handleTimer}>Timer</Button>:<Button colorScheme='yellow' size='xs' onClick={handleTimer}>Pause</Button>}
                                    </Box>
                                    <Box><Icon as={FaRegCalendarAlt}/>{"Plan"}</Box>
                                </HStack>
                                <Stack><Box>More</Box></Stack>
                            </HStack>
                        </Stack>
                  </VStack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }