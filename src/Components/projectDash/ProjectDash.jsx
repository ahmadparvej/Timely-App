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
  HStack,
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
import {BackdropExample} from "./Overlay"
import { IoMdBriefcase } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import { GoPin } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { IoIosCopy } from "react-icons/io";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import axios from "axios";
import Recent from "../recentAct/Recent";

function handleClickDelete(e){
console.log(e)
}

function handleEdit(ele) {
  const projectId= ele._id
  axios.patch(
    `https://evening-castle-55317.herokuapp.com/user/:${projectId}`
  );
}
function ProjectDash() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://evening-castle-55317.herokuapp.com/user/projects").then((res) => {
      console.log(res.data);
      const data = res.data;
      setProjects(data);
      console.log(data)
    });
  };
  return (
    <Box w="100%" bg="#f6f6f7">
      <Heading fontSize={"sm"} m="10px 10px 0px 0px">
        Recent and pinned projects
      </Heading>
      <Wrap p="30px" spacing="30px">
        {projects.map((ele,i) => (
          <Flex
            w="300px"
            h="90px"
            justifyContent={"space-between"}
            p="30px"
            bg="white"
            key={i}
          >
            <Flex gap="5px">
              <Box
                background={ele.singColor}
                w="30px"
                h="30px"
                pt="4px"
                textAlign={"center"}
                borderRadius="5px"
                
              >
                <Icon as={IoMdBriefcase} color="white" />
              </Box>
              <VStack h="40px" alignItems="left">
                <Heading fontSize={"xs"} textAlign="left">
                  {ele.projectName}
                </Heading>
                <Text fontSize={"xs"} textAlign="left">
                  {ele.client}
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
                      <Text fontSize={"sm"} onClick={(ele)=>{handleEdit(ele)}} >Edit</Text>
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
                 
                    <BackdropExample ele={ele} getData={getData} />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        ))}
      </Wrap>
      <Recent />
    </Box>
  );
}

export default ProjectDash;
