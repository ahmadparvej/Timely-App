import React from "react";
// import { MainDiv, LeftDiv, RightDiv,ProjectH1 } from "./project.styles";
import { Flex, Box, Heading, Text, Wrap } from "@chakra-ui/react";
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
  Stack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import ServerQuickActions from "./ImportButton";
const ProjectNav = () => {
  const navigate = useNavigate();
  return (
    <Flex
      name="main"
      w="100%"
      h="80px"
      background={"#eef1f2"}
      justifyContent="space-around"
      pos="sticky"
      top="0px"
    >
      <Box name="left" m="auto" h="100%" ml="20px" w="30%">
        <Heading as="md" mb="10px">
          Projects
        </Heading>
      </Box>
      <Flex name="right" pl="100px" gap="10px" w="70%" alignItems={"center"}>
        <Flex
          gap="0px"
          justifyContent={"center"}
          border="0.5px solid darkgray"
          background="white"
          alignSelf={"center"}
          borderRadius="5px"
          h="35px"
        >
          <IconButton
            icon={<AiOutlineSearch />}
            background="white"
            h="32px"
            disabled={"true"}
          />

          <Input
            placeholder="  Client or Project"
            alignSelf={"center"}
            p="0px"
            w="150px"
            border={"none"}
            outline="none"
            _focus={{ boxShadow: "none !important" }}
            background="white"
            h="32px"
          />
        </Flex>
        <Button
          h="32px"
          border="0.5px solid darkgray"
          background="white"
          leftIcon={<FaUserAlt />}
          alignSelf={"center"}
          p="0px"
          w="150px"
        >
          Manage clients
        </Button>
        <ServerQuickActions />
        <Stack
          h="32px"
          direction="row"
          spacing={4}
          alignSelf={"center"}
          p="0px"
        >
          <Button
            leftIcon={<AddIcon />}
            background={"#3d73da"}
            color="white"
            variant="solid"
            h="32px"
            _hover={{ background: "blue" }}
            _active={{ background: "blue" }}
            onClick={() => navigate("/new")}
          >
            New Project
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ProjectNav;
