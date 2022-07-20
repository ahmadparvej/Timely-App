import React from "react";
// import { MainDiv, LeftDiv, RightDiv,ProjectH1 } from "./project.styles";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  IconButton,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import ServerQuickActions from "./ImportButton";
const Project = () => {
  return (
    <Flex name="main">
      <Box name="left">
        <Heading as="md">Projects</Heading>
        <Box>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Dashboard</Tab>
              <Tab>All Projects</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Flex name="right">
        <Input placeholder="Basic usage" />
        <Box></Box>
        <ServerQuickActions />
        <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
          <Button>New Project</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Project;
