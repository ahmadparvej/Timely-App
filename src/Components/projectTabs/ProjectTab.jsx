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
    <Box>
      <Tabs variant="enclosed" border="1px solid black">
        <TabList color="black" border="1px solid red">
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
