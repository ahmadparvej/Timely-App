import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Heading,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const ServerQuickActions = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" w="fit-content">
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button
            rightIcon={<ChevronDownIcon />}
            colorScheme="white"
            w="fit-content"
            color="black"
            border="0.5px solid darkgray"
            background="white"
            h="32px"
          >
            Import
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: "none" }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="bold" bg="whitesmoke">
            <Text color="gray">Import projects</Text>
            <Text fontSize="xs" color={"darkgray"}>
              Import projects from other tools
            </Text>
          </PopoverHeader>
          <PopoverBody w="full">
            <Tabs isLazy colorScheme="none">
              <TabList textAlign={"left"}  >
                <Tab
                  _focus={{ boxShadow: "none" }}
                  fontSize="xs"
                  fontWeight="bold"
                  w="100%"
                  textAlign={"left"}
                  alignContent="left"
                  h="50px"
                >
                  Available to connect
                </Tab>
              </TabList>
                <br></br>
              <TabPanels>
                <Flex justifyContent={"space-around"}  gap="10px">
                  <Box background="whiteSmoke" _hover={{bg:"darkgray"}} w="38px" h="35px" borderRadius={"5px"}>
                    <Image
                      boxSize={"33px"}
                      src="https://dou6see51s3xi.cloudfront.net/images/toggl-ed22ea4f9df3b97c70c29bd254a9e5b8.png"
                    />
                  </Box>
                  <Box textAlign={"left"}>
                    <Heading fontSize={"sm"}>Toggl</Heading>
                    <Text fontSize={"xs"}>
                      Quickly import Harvest users and projects into Timely.
                    </Text>
                  </Box>
                </Flex>
                <br></br>
                <Flex justifyContent={"space-around"}  gap="10px">
                  <Box background="whiteSmoke" p="3px" _hover={{bg:"darkgray"}}  w="45px" h="40px" borderRadius={"5px"}>
                    <Image
                      boxSize={"33px"}
                      src="https://dou6see51s3xi.cloudfront.net/images/harvest-ff74393b564ba2d100f5f1fe8d5b1b86.png"
                    />
                  </Box>
                 
                  <Box textAlign={"left"}>
                    <Heading fontSize={"sm"}>Harvest</Heading>
                    <Text fontSize={"xs"}>
                      Quickly import Harvest users and projects into Timely.
                    </Text>
                  </Box>
                </Flex>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default ServerQuickActions;
