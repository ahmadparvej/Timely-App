import React from "react";
import {
  Stack,
  Text,
  Flex,
  HStack,
  VStack,
  Box,
  Heading,
  Button,
  Icon
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import { BsFillInfoCircleFill } from "react-icons/bs";

import { ProfileMenu } from "./ProfileMenu";
import { AddProjectModal } from './AddProjectModal';

export const Dashboard = () => {
  return (
    <Stack w="90%" m="1rem" gap="1rem">
      <Flex minWidth="max-content" justifyContent="space-between">
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </HStack>
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>{"<"}</Button>
          <Input
            placeHolder="Select Date and Time"
            size="md"
            backgroundColor="#ffffff"
            type="datetime-local"
          />
          <Button>{">"}</Button>
        </HStack>
        <HStack>
          <Heading as="h4" size="md">
            0h - ₹0
          </Heading>
        </HStack>
        <HStack border="2px solid #e7e9eb" borderRadius="4px">
          <Button>Solo</Button>
          <Button>Company</Button>
        </HStack>
        <Stack border="2px solid #e7e9eb" borderRadius="4px">
          <ProfileMenu />
        </Stack>
      </Flex>
      <HStack gap="1rem" w="100%" justifyContent="space-between">
        <Stack
          w="45%"
          h="100vh"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          borderRadius="8px"
          gap="1rem"
        >
          <Stack color="grey" gap="0.5rem" borderBottom="1px solid grey" p="1rem">
          <HStack><Heading as="h4" size="sm">Timesheet</Heading>
          <Icon as={BsFillInfoCircleFill}/></HStack>
          <Heading as="h4" size="md">0h</Heading>
          </Stack>
          <Stack p="1rem">
          <AddProjectModal/>
          </Stack>
        </Stack>
        <Stack
          w="55%"
          h="100vh"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          borderRadius="8px"
          gap="1rem"
        >
          <Stack color="grey" gap="0.5rem" borderBottom="1px solid grey" p="1rem">
          <HStack><Heading as="h4" size="sm">Authomatic time tracking</Heading>
          <Icon as={BsFillInfoCircleFill}/></HStack>
          </Stack>
        </Stack>
      </HStack>
    </Stack>
  );
};
