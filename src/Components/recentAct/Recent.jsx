import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Wrap,
  VStack,
  br,
  Icon,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { FiClock } from "chakra-icons/fi";
import { BsFillClockFill } from "react-icons/bs";
import { TbRotateClockwise2 } from "react-icons/tb";
import { IoMdBriefcase } from "react-icons/io";
import { FaBlackTie } from "react-icons/fa";

const Recent = () => {
  return (
    <Box>
      {/* top bar */}
      <Flex justifyContent={"space-between"}>
        <Box m="40px 10px 10px 0px">
          <Heading fontSize={"md"}>Latest Activities</Heading>
        </Box>
        <Box mt="20px">
          <Tabs
            size="sm"
            borderRadius={"5px"}
            colorScheme="gray"
            _focus={{ background: "#44505e" }}
          >
            <TabList borderRadius={"5px"}>
              <Tab _selected={{ color: "white", bg: "#44505e" }}>
                All activities
              </Tab>
              <Tab _selected={{ background: "#44505e", color: "white" }}>
                Regular
              </Tab>
              <Tab _selected={{ background: "#44505e", color: "white" }}>
                Anomalies
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Flex>
      <VStack
        alignItems={"left"}
        bg="white"
        p="20px 0px 20px 20px"
        borderRadius={"5px"}
      >
        <Box>
          <Heading fontSize={"md"} color="gray">
            Yesterday
          </Heading>
        </Box>
        <br></br>
        <Flex justifyContent={"space-between"}>
          <Flex gap="4px">
            <Box
              bg="#5ebce5 "
              h="30px"
              w="30px"
              borderRadius={"3px"}
              alignItems="center"
              textAlign={"center"}
              alignContent="center"
              pt="5px"
            >
              <Icon as={BsFillClockFill} color="white" size={"xs"} />
            </Box>
            <Text>Learn React</Text>
          </Flex>
          <Flex
            gap="7px"
            alignItems={"center"}
            textAlign="left"
            justifyContent={"left"}
            w="450px"
          >
            <Icon as={TbRotateClockwise2} color="#5ebce5" size={"xs"} />
            <Heading fontSize={"sm"}>Affan Ahmad</Heading>
            <Text>logged hours for the first time on this project</Text>
          </Flex>
          <Box mr="20px">23:52</Box>
        </Flex>
        <br></br>
        <Flex justifyContent={"space-between"}>
          <Flex gap="4px">
            <Box
              bg="#5ebce5 "
              h="30px"
              w="30px"
              borderRadius={"3px"}
              alignItems="center"
              textAlign={"center"}
              alignContent="center"
              pt="5px"
            >
              <Icon as={IoMdBriefcase} color="white" size={"xs"} />
            </Box>
            <Text>Communication</Text>
          </Flex>
          <Flex
            gap="7px"
            alignItems={"center"}
            textAlign="left"
            justifyContent={"left"}
            w="450px"
          >
            <Icon as={TbRotateClockwise2} color="#5ebce5" size={"xs"} />
            <Heading fontSize={"sm"}>Affan Ahmad</Heading>
            <Text>created this project</Text>
          </Flex>
          <Box mr="20px">23:52</Box>
        </Flex>
        <br></br>
        <Flex justifyContent={"space-between"}>
          <Flex gap="4px">
            <Box
              bg="#5ebce5 "
              h="30px"
              w="30px"
              borderRadius={"3px"}
              alignItems="center"
              textAlign={"center"}
              alignContent="center"
              pt="5px"
            >
              <Icon as={FaBlackTie} color="white" size={"xs"} />
            </Box>
            <Text>Pankaj</Text>
          </Flex>
          <Flex
            gap="7px"
            alignItems={"center"}
            textAlign="left"
            justifyContent={"left"}
            w="450px"
          >
            <Icon as={TbRotateClockwise2} color="#5ebce5" size={"xs"} />
            <Heading fontSize={"sm"}>Affan Ahmad</Heading>
            <Text>created client</Text>
          </Flex>
          <Box mr="20px">23:52</Box>
        </Flex>
        <br></br>
        <Flex justifyContent={"space-between"}>
          <Flex gap="4px">
            <Box
              bg="#5ebce5 "
              h="30px"
              w="30px"
              borderRadius={"3px"}
              alignItems="center"
              textAlign={"center"}
              alignContent="center"
              pt="5px"
            >
              <Icon as={IoMdBriefcase} color="white" size={"xs"} />
            </Box>
            <Text>Learn React</Text>
          </Flex>
          <Flex
            gap="7px"
            alignItems={"center"}
            textAlign="left"
            justifyContent={"left"}
            w="450px"
          >
            <Icon as={TbRotateClockwise2} color="#5ebce5" size={"xs"} />
            <Heading fontSize={"sm"}>Affan Ahmad</Heading>
            <Text>created this project</Text>
          </Flex>
          <Box mr="20px">23:52</Box>
        </Flex>
        <br></br>
      </VStack>
    </Box>
  );
};

export default Recent;
