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
import ProjectNav from "../projectsNav/Project.Nav";
import ProjectTab from "../projectTabs/ProjectTab";

const ProjectPage = () => {
  return (
    <Box w="100%" pl="40px" pr="40px" background={"#eef1f2"}>
      <Box w="100%"  >
        <ProjectNav />
        <ProjectTab />
      </Box>
    </Box>
  );
};

export default ProjectPage;
