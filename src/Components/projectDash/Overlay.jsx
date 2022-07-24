import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  Heading,
  Icon,
  VStack,
  Box,
} from "@chakra-ui/react";
import { BsFillClockFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

import React from "react";
export function BackdropExample({ele,getData}) {
  console.log(ele)
  const projectId = ele._id;
  console.log(projectId)
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  function handleDelete() {
    axios.delete(
      `https://evening-castle-55317.herokuapp.com/user/:${projectId}`
    ).then((res) =>{
      getData()
    })

  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Flex
        pb="2px"
        gap="5px"
        _hover={{ background: "whitesmoke" }}
        alignItems={"center"}
        mb="10px"
        color={"red"}
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        <Icon as={RiDeleteBin6Line} size="md" />
        <Text fontSize={"sm"}>Delete</Text>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
        {overlay}
        <ModalContent>
          <ModalHeader>
            <Heading fontSize={"md"} color="#44505e">
              {" "}
              Delete Communication
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack p="20px" bg="#faede9" alignItems={"left"} textAlign="left">
              <Flex gap="4px" align={"center"}>
                <Box bg="#67a3bc" h="30px" w="30px" borderRadius="5px"></Box>
                <Heading fontSize={"sm"}>Communication </Heading>
                <Text fontSize={"sm"}> will be permanently deleted</Text>
              </Flex>
              {/* one */}
              <Flex gap="4px" align={"center"}>
                <Box
                  h="30px"
                  w="30px"
                  borderRadius="5px"
                  align="center"
                  pt="5px"
                >
                  <Icon as={BsFillClockFill} size="sm" color="#697077 "></Icon>
                </Box>

                <Heading fontSize={"sm"}>All entries </Heading>
                <Text fontSize={"sm"}>
                  {" "}
                  logged to this project will be permanently deleted
                </Text>
              </Flex>
              {/* two */}
              <Flex gap="4px" align={"center"}>
                <Box
                  h="30px"
                  w="30px"
                  borderRadius="5px"
                  align="center"
                  pt="5px"
                >
                  <Icon as={MdTask} size="sm" color="#697077 "></Icon>
                </Box>{" "}
                <Heading fontSize={"sm"}>All tasks </Heading>
                <Text fontSize={"sm"}>
                  assigned to this project will be permanently deleted
                </Text>
              </Flex>
              {/* three */}
              {/* AiFillDollarCircle */}
              <Flex gap="4px" align={"center"}>
                <Box
                  h="30px"
                  w="30px"
                  borderRadius="5px"
                  align="center"
                  pt="5px"
                >
                  <Icon
                    as={AiFillDollarCircle}
                    size="sm"
                    color="#697077 "
                  ></Icon>
                </Box>{" "}
                <Heading fontSize={"sm"}>All invoices </Heading>
                <Text fontSize={"sm"}>
                  {" "}
                  based on this project will be permanently deleted
                </Text>
              </Flex>
              {/* four */}
              <Flex gap="4px" align={"center"}>
                <Box
                  h="30px"
                  w="30px"
                  borderRadius="5px"
                  align="center"
                  pt="5px"
                >
                  <Icon
                    as={MdOutlineReportGmailerrorred}
                    size="sm"
                    color="#697077 "
                  ></Icon>
                </Box>{" "}
                <Heading fontSize={"sm"}>All reports </Heading>
                <Text fontSize={"sm"}>
                  that include this project will change
                </Text>
              </Flex>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" justifyContent={"space-between"}>
              <Button
                bg="#ce4627 "
                color="white"
                onClick={() => handleDelete()}
              >
                Delete permanently
              </Button>
              <Button onClick={onClose}>Close</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
