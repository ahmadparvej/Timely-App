import React from "react";
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
} from "@chakra-ui/react";
import ProjectDash from "../projectDash/ProjectDash";
function ProjectTab() {
  return (
    <Box bg="#f6f6f7" >
      <Tabs variant="enclosed" >
        <TabList color="black" >
          <Tab>Dashboard</Tab>
          <Tab>All Projects</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
           <ProjectDash/>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default ProjectTab;
