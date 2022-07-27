
import React, { useEffect, useState } from 'react'
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
    PopoverArrow,
    PopoverBody,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    TableContainer,
    Radio,
    PopoverHeader
} from "@chakra-ui/react"
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const colors = ["#1976d2", "#00796b", "#2e7d32", "#d4e157", "#ffeb3b", "#ffb74d", "#ff8a65",
    "#e57373", "#b72367", "#7e57c2", "#bbdefb", "#b2dfdb", "#c8e6c9", "#f0f4c3", "#fff59d",
    "#ffe0b2", "#ffccbc", "#ffcdd2", "#efaecc", "#d1c4e9",
]

export const NewProject = () => {
    const [newProject, setNewProject] = useState({})
    const [colorData, setColorData] = useState(colors)
    const [singColor, setSingColor] = useState("#e57373");
    const [clientName, setClientName] = useState("")
    const userId = JSON.parse(localStorage.getItem("userId"))
    const navigate=useNavigate();

    useEffect(() => {
     
    }, [singColor])
    
    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log('value:', value)
        console.log('name:', name)
        setNewProject({
            ...newProject,
            [name]: value,
           singColor
        })
        setClientName(value)
       
    }
    const handleSubmit = () => {
        newProject.singColor=singColor
        console.log(newProject);
        let payload=JSON.stringify(newProject);
        fetch(`https://evening-castle-55317.herokuapp.com/user/62da35e81f868324ad0dcc06/projects`,{
            headers:{
                "content-Type":"Application/json"
            },
            method:"POST",
            body: payload
        })
        .then((res)=>res.json())
        .then((data)=>navigate("/dashboard/projects"))
        .catch((err)=>console.log(err));
    }


    return (
        <Box bg="#F6F6F7" pt="30px">
            <Box width="85%" m="auto">
                {/* navbar */}
                <Flex direction="column" pb="70px">
                    <HStack justifyContent="space-between" mb="15px">
                       <Button
              variant="outline"
              colorScheme="gray"
              color="grey"
              borderWidth="3px"
              onClick={()=>navigate("/dashboard/projects")}
            >
              <Icon as={BiLeftArrowAlt} />
              Back
            </Button>
                        <Button bg="#3D73DA" color="white" p="5px 15px" _hover="#0a2d6e" onClick={handleSubmit}>Create Project</Button>
                    </HStack>
                    <HStack>
                        <Heading color="#44505E">New Project</Heading>
                    </HStack>
                </Flex>
                {/* Project details */}
                <Box h="300px" p="20px" bg="white" variant="outline" borderRadius="5px" mb="22px">
                    <Flex>
                        <VStack mr="9%" align="flex-start" width="20%" textAlign="left">
                            <Text fontSize="18px" color="#44505E" fontWeight="bold">Project details</Text>
                            <Text color="grey">Choosing a color helps separate projects and the hours logged against them.</Text>
                        </VStack>
                        <SimpleGrid width="60%" columns={4} columnGap={3} rowGap={3}>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel color="gray" fontWeight="normal">PROJECT NAME</FormLabel>
                                    <Input placeholder='Project name' name='projectName' onChange={handleChange}></Input>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl textAlign="left">
                                    <FormLabel color="gray" fontWeight="normal">COLOR</FormLabel>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button p="0px 25px" variant="outline" colorScheme="gray" color="grey" borderWidth="3px">
                                                <Icon color={singColor} fontSize="25px" as={BsCircleFill} />
                                            </Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent width="52%" >
                                                <PopoverArrow />
                                                <PopoverBody fontSize="18px" color="white">
                                                    <PopoverHeader fontSize="18px" color="black">Preview</PopoverHeader>
                                                    <Box bg={singColor} p="5px 15px" boxSizing='border-box' borderRadius="5px" spacing={1}>
                                                        <VStack spacing={1} align="flex-start">
                                                            <Text fontSize="18px" color="black" fontWeight="500">Project</Text>
                                                            <Text color="black" fontWeight="500">{clientName}</Text>
                                                        </VStack>
                                                        <VStack spacing={1} align="flex-end">
                                                            <Text color="black" fontWeight="500">1h</Text>
                                                        </VStack>
                                                    </Box>
                                                    <Box textAlign="center" mt="10px">
                                                        {colorData.map((color) => (
                                                            <Button
                                                                key={color}
                                                                size="sm"
                                                                mr="5px"
                                                                mb="5px"
                                                                onClick={() => { setSingColor(color); console.log(singColor) }}
                                                                borderRadius="50px"
                                                                bg={color}
                                                                _hover={color}
                                                            ></Button>
                                                        ))}
                                                    </Box>
                                                    <Box mt="10px" textAlign="center">
                                                        <Button variant="outline" color="grey" bg="#F6F6F7">{singColor}</Button>
                                                    </Box>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3}>
                                <FormControl>
                                    <FormLabel color="gray" fontWeight="normal">CLIENT</FormLabel>
                                    <Select icon={<MdArrowDropDown />} color="gray" name='client' placeholder='Select Client' onChange={handleChange}>
                                        <option value="Parvej">Parvej</option>
                                        <option value="Pankaj">Pankaj</option>
                                        <option value="Affan">Affan</option>
                                        <option value="Sristi">Sristi</option>
                                        <option value="Kiran">Kiran</option>
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
                                            <PopoverContent width="75%">
                                                <PopoverArrow />
                                                <PopoverBody>
                                                    <Input placeholder='Enter client name' />
                                                    <Button mt="10px" width="100%" colorScheme='blue'>Create client</Button>
                                                </PopoverBody>
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
                {/* People and Rates */}
                <Box h="300px" p="20px" bg="white" variant="outline" borderRadius="5px" mb="20px">
                    <Flex>
                        <VStack mr="9%" align="flex-start" width="20%" textAlign="left">
                            <Text fontSize="18px" color="#44505E" fontWeight="bold">People & Hourly rates</Text>
                            <Text color="grey">Add people to allow them to log hours to this project.</Text>
                            <Text color="grey">Add people to allow them to log hours to this project.</Text>
                        </VStack>
                        <SimpleGrid width="60%" columns={4} columnGap={3} rowGap={4}>
                            <GridItem colSpan={2}>
                                <Popover>
                                    <PopoverTrigger>
                                        <Input icon={<MdArrowDropDown />} color="gray" placeholder='Choose people to add' />
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent width="full">
                                            <PopoverArrow />
                                            <PopoverBody>
                                                <Input placeholder='Search users' mb="10px" />
                                                <Box bg="#F6F6F7" borderRadius="5px">
                                                    <Checkbox><Button bg="gray" borderRadius="60px" size="sm" color="white">PK</Button>Pankaj Kumar</Checkbox>
                                                </Box>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>
                            </GridItem>
                            <GridItem colSpan={2}>

                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel color="#44505E">DEFAULT BILLABLE RATE</FormLabel>
                                    <Select icon={<MdArrowDropDown />} color="#44505E">
                                        <option value="same">Same for everyone</option>
                                        <option value="individual">Individual rates</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <FormControl>
                                    <FormLabel color="#44505E">RATE</FormLabel>
                                    <Input type="number" placeholder='₹/hr' />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <Box h="120px" w="full">
                                    <TableContainer>
                                        <Table size='md'>
                                            <Thead>
                                                <Tr>
                                                    <Th>Person</Th>
                                                    <Th>Billable rate/h</Th>
                                                    <Th isNumeric>Cost rate/h</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>
                                                        <Box borderRadius="5px">
                                                            <Button bg="gray" borderRadius="60px" size="sm" color="white">PK</Button>Pankaj Kumar
                                                        </Box>
                                                    </Td>
                                                    <Td>₹0</Td>
                                                    <Td isNumeric>—</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </Box>
                {/* Budget */}
                <Box h="300px" p="20px" bg="white" variant="outline" borderRadius="5px" mb="20px">
                    <Flex>
                        <VStack mr="9%" align="flex-start" width="20%" textAlign="left">
                            <Text fontSize="18px" color="#44505E" fontWeight="bold">Budget</Text>
                            <Text color="grey">Add a time or money budget, and select a time interval to make it recurring.</Text>
                            <Text color="grey">Note: once saved, your recurring budget cannot be changed.</Text>
                        </VStack>
                        <SimpleGrid width="60%" columns={4} columnGap={3} rowGap={4}>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel color="#44505E">TYPE</FormLabel>
                                    <Select icon={<MdArrowDropDown />} color="#44505E">
                                        <option value="same">Time Budget</option>
                                        <option value="individual">Money Budget</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel color="#44505E">BUDGET AMOUNT</FormLabel>
                                    <Input type="number" placeholder='0' />
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel color="#44505E">INTERVAL</FormLabel>
                                    <Select icon={<MdArrowDropDown />} color="#44505E">
                                        <option value="same">None</option>
                                        <option value="same">Monthly</option>
                                        <option value="individual">Weekly</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem colSpan={3} textAlign="left">
                                <FormControl>
                                    <Checkbox>Invoice based on budget instead of logged hours (0h, invoiced once)</Checkbox>
                                </FormControl>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </Box>
                {/* Tags */}
                <Box h="300px" p="20px" bg="white" variant="outline" borderRadius="5px" mb="20px">
                    <Flex>
                        <VStack mr="9%" align="flex-start" width="20%" textAlign="left">
                            <Text fontSize="18px" color="#44505E" fontWeight="bold">Budget</Text>
                            <Text color="grey">Add a time or money budget, and select a time interval to make it recurring.</Text>
                            <Text color="grey">Note: once saved, your recurring budget cannot be changed.</Text>
                        </VStack>
                        <SimpleGrid width="60%" columns={4} columnGap={3} rowGap={3}>
                            <GridItem colSpan={3} textAlign="left">
                                <Radio mb="10px">Invoice based on budget instead of logged hours (0h, invoiced once)</Radio>
                                <Radio mb="10px">Invoice based on budget instead of logged hours (0h, invoiced once)</Radio>
                                <Radio>Invoice based on budget instead of logged hours (0h, invoiced once)</Radio>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </Box>
            </Box>
        </Box>
  );
};
