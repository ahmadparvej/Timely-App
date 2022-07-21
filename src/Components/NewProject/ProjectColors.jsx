import {
    Box,
    Button,
    Heading,
    Input,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    Portal,
    Text,
    VStack
} from '@chakra-ui/react'
import React, { useState } from 'react'

const colors = [
    "1976d2",
    "00796b",
    "2e7d32",
    "d4e157",
    "ffeb3b",
    "ffb74d",
    "ff8a65",
    "e57373",
    "b72367",
    "7e57c2",
    "bbdefb",
    "b2dfdb",
    "c8e6c9",
    "f0f4c3",
    "fff59d",
    "ffe0b2",
    "ffccbc",
    "ffcdd2",
    "efaecc",
    "d1c4e9",
]

const ProjectColors = () => {
    const [colorData, setColorData] = useState(colors)
    console.log('colorData:', colorData)

    return (
        <>
            <Portal>
                <PopoverContent width="52%" >
                    <PopoverArrow />
                    <PopoverBody fontSize="18px" color="white">
                        <PopoverHeader fontSize="18px" color="black">Preview</PopoverHeader>
                        <Box bg="#e57373" p="5px 15px" boxSizing='border-box' borderRadius="5px" spacing={1}>
                            <VStack spacing={1} align="flex-start">
                                <Text fontSize="18px">Project</Text>
                                <Text>Affan</Text>
                            </VStack>
                            <VStack spacing={1} align="flex-end">
                                <Text>1h</Text>
                            </VStack>
                        </Box>
                        <Box textAlign="center">
                            {colorData.map((color) => (
                                <Button borderRadius="50px" color={`#${color}`}></Button>
                            ))}
                        </Box>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </>
    )
}

export default ProjectColors