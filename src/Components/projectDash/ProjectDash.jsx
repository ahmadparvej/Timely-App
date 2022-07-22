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
    <Box border="1px solid blue" w="100%">
      <Text>Recent and pinned projects</Text>
      <Wrap>
        {projects.map((ele) => (
          <Flex
            w="200px"
            border="1px solid black"
            justifyContent={"space-between"}
            p="15px"
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
              <Box>
                <Heading fontSize={"xs"}>{ele.title}</Heading>
                <Text fontSize={"xs"}>{ele.name}</Text>
              </Box>
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
                <PopoverContent bg="white" color="black" w="auto">
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
