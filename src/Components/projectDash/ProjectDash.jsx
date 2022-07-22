import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Wrap,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  IconButton,
  ButtonGroup,
  Button,
  Stack,
  Icon,
  VStack,
  HStack
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { IoMdBriefcase } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import { GoPin } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { IoIosCopy } from "react-icons/io";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import axios from "axios";

function ProjectDash() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:6060/projects").then((res) => {
      console.log(res.data);
      const data = res.data;
      setProjects(data);
    });
  };
  return (
    <Box  w="100%" bg="#f6f6f7">
      <Text>Recent and pinned projects</Text>
      <Wrap>
        {projects.map((ele) => (
          <Flex
            w="300px"
            h="90px"
            justifyContent={"space-between"}
            p="30px"
            bg="white"
          >
            <Flex gap="5px">
              <Box
                background={ele.color}
                w="30px"
                h="25px"
                textAlign={"center"}
                borderRadius="5px"
              >
                <Icon as={IoMdBriefcase} color="white" />
              </Box>
              <VStack h="40px" alignItems="left">
                <Heading fontSize={"xs"} textAlign="left">
                  {ele.title}
                </Heading>
                <Text fontSize={"xs"} textAlign="left">
                  {ele.name}
                </Text>
              </VStack>
            </Flex>

            <Box>
              <Popover>
                <PopoverTrigger>
                  <Box
                    tabIndex="0"
                    role="button"
                    aria-label="Some box"
                    children="Click"
                    h="20px"
                    m="0px"
                  >
                    {" "}
                    <Icon as={BsThreeDots} />
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  bg="white"
                  color="black"
                  w="auto"
                  boxShadow="base"
                >
                  {/* <PopoverHeader fontWeight="semibold">
                    Customization
                  </PopoverHeader> */}
                  <PopoverArrow bg="white" />
                  <PopoverCloseButton bg="white" />
                  <PopoverBody pt="25px">
                    <Flex
                      pb="2px"
                      gap="5px"
                      _hover={{ background: "whitesmoke" }}
                      alignItems={"center"}
                      mb="10px"
                    >
                      <Icon as={GoPin} />
                      <Text fontSize={"sm"}>Pin to dashboard</Text>
                    </Flex>
                    <Flex
                      pb="2px"
                      gap="5px"
                      _hover={{ background: "whitesmoke" }}
                      alignItems={"center"}
                      mb="10px"
                    >
                      <Icon as={GrEdit} />
                      <Text fontSize={"sm"}>Edit</Text>
                    </Flex>
                    <Flex
                      pb="2px"
                      gap="5px"
                      _hover={{ background: "whitesmoke" }}
                      alignItems={"center"}
                      mb="10px"
                    >
                      <Icon as={IoIosCopy} />
                      <Text fontSize={"sm"}>Duplicate</Text>
                    </Flex>
                    <Flex
                      pb="2px"
                      gap="5px"
                      _hover={{ background: "whitesmoke" }}
                      alignItems={"center"}
                      mb="10px"
                    >
                      <Icon as={FaArchive} />
                      <Text fontSize={"sm"}>Archive</Text>
                    </Flex>
                    <Flex
                      pb="2px"
                      gap="5px"
                      _hover={{ background: "whitesmoke" }}
                      alignItems={"center"}
                      mb="10px"
                    >
                      <Icon as={RiDeleteBin6Line} />
                      <Text fontSize={"sm"}>Delete</Text>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        ))}
      </Wrap>
    </Box>
  );
}

export default ProjectDash;
