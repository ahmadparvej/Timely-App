import React from 'react'
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    VStack,
    Input,
    Icon,
    Text,
    Select,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Checkbox,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow
} from "@chakra-ui/react"
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";



export const NewProject = () => {
    return (
        <Box bg="#F6F6F7" pt="30px">
            <Box width="85%" m="auto">
                {/* navbar */}
                <Flex direction="column" pb="70px">
                    <HStack justifyContent="space-between" mb="15px">
                        <Button variant="outline" colorScheme="gray" color="grey" borderWidth="3px">
                            <Icon as={BiLeftArrowAlt} />
                            Back
                        </Button>
                        <Button bg="#3D73DA" color="white" p="5px 15px">Create Project</Button>
                    </HStack>
                    <HStack>
                        <Heading color="#44505E">New Project</Heading>
                    </HStack>
                </Flex>
                {/* Project details */}
                <Box h="300px" p="20px" bg="white" variant="outline">
                    <Flex>
                        <VStack mr="9%" align="flex-start" width="20%" textAlign="left">
                            <Text fontSize="18px" color="#44505E" fontWeight="bold">Project details</Text>
                            <Text color="grey">Choosing a color helps separate projects and the hours logged against them.</Text>
                        </VStack>
                        <SimpleGrid width="60%" columns={4} columnGap={3} rowGap={3}>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel color="gray" fontWeight="normal">PROJECT NAME</FormLabel>
                                    <Input placeholder=''></Input>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl textAlign="left">
                                    <FormLabel color="gray" fontWeight="normal">COLOR</FormLabel>
                                    <Button p="0px 25px" variant="outline" colorScheme="gray" color="grey" borderWidth="3px">
                                        <Icon color="#bbdefb" fontSize="25px" as={BsCircleFill} />
                                    </Button>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel color="gray" fontWeight="normal">CLIENT</FormLabel>
                                    <Select icon={<MdArrowDropDown />} color="gray" placeholder='Select Client'>
                                        <option value="">Abhishek</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl textAlign="left">
                                    <FormLabel color="gray" fontWeight="normal">OR</FormLabel>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button p="0px 25px" variant="outline" colorScheme="gray" color="grey" borderWidth="3px">
                                                Create new client
                                            </Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <Button colorScheme='blue'>Button</Button>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3} textAlign="left">
                                <FormControl>
                                    <Checkbox>Set external ID reference</Checkbox>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3} textAlign="left">
                                <FormControl>
                                    <Checkbox>Require note when logging to project</Checkbox>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </Box>

            </Box>
        </Box>
    )
}
