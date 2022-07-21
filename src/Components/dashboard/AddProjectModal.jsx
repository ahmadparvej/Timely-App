import { Input, VStack, Stack, Select, Icon } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import { FaArrowsAltH } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

export function AddProjectModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      <Button background="#3d73da" color="white" p="25px" _hover={{background:"blue"}} onClick={onOpen}>New Entry</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent background="#eff1f2">
            <ModalBody my="15px">
                  <VStack gap="10px" background="white" p="10px">
                        <Input placeHolder="Add a note for this work"/>
                        <Select placeholder='Select Project'>
                            <option value='Communication'>Communication</option>
                            <option value='General'>General</option>
                        </Select>
                        <Stack w="100%" background="rgb(204, 204, 204)" p="10px">
                            <Heading as="h3" size="sm" fontWeight="500">Logged time</Heading>
                            <HStack justify="space-between">
                                <Heading as="h3" size="md">0h 0m</Heading>
                                <HStack>
                                    <Button>15m</Button>
                                    <Button>30m</Button>
                                    <Button>1h 00m</Button>
                                </HStack>
                            </HStack>
                        </Stack>
                        <Stack w="100%" p="10px">
                            <Heading as="h3" size="sm" fontWeight="500">Logged time</Heading>
                            <HStack justify="space-between">
                                <HStack>
                                    <Box><Icon as={FaArrowsAltH}/>{"From & To"}</Box>
                                    <Box><Icon as={MdOutlineWatchLater}/>{"Timer"}</Box>
                                    <Box>{"Timer"}</Box>
                                    <Box>{"Plan"}</Box>
                                </HStack>
                                <Stack><Box>More</Box></Stack>
                            </HStack>
                        </Stack>
                  </VStack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Submit
              </Button>
              <Button variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }