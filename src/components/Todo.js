import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Heading, Input, Spacer, VStack, IconButton, StackDivider, Text, Badge } from "@chakra-ui/react";
import { nanoid } from 'nanoid';
import { DeleteIcon } from '@chakra-ui/icons'

import { useColorMode } from '@chakra-ui/react'

const Todo = () => {
    ////logic//////////////////////////////
    const [text, setText] = useState('')
    //const [mytasks, setMytasks] = useState(() => JSON.parse(localStorage.getItem("mytasks")) || [{ id: "_23123", text: "tue was macht spass!" }, { id: "_2Sds", text: "Schreib was zu tun!" }])
    const [mytasks, setMytasks] = useState([])

    const { colorMode } = useColorMode()
    const bgColor = { light: "gray.200", dark: "black" }
    const textColor = { light: "blue.900", dark: "blue.100" }

    useEffect(() => {
        setMytasks(JSON.parse(localStorage.getItem("mytasks")))
    }, [])

    useEffect(() => {
        localStorage.setItem("mytasks", JSON.stringify(mytasks))
    }, [mytasks])

    const handleEnter = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setMytasks([...mytasks, { "id": nanoid(), "text": text }])
            setText("")
        }
    }
    const handleDelete = (id) => {
        setMytasks(mytasks.filter(t => t.id !== id))
    }

    ////user interface//////////////////////////////
    return (
        <Container h="100vh">
            <VStack m="5" mt="10vh">

                <Heading size="3xl" mb="8" color="blue.400">Todo App</Heading>
                <VStack align="left" w="100%" p="5" divider={<StackDivider borderColor="blue.100" />} borderColor="blue.200" borderWidth='2px' borderRadius="md" boxShadow="xl" bg={bgColor[colorMode]}>
                    {!mytasks.length && <Badge colorScheme="red" borderRadius="xl" align="center">No Task</Badge>}
                    {mytasks.map(task => <Flex key={task.id} align="center"><Text color={textColor[colorMode]}> {task.text} </Text>
                        <Spacer></Spacer>

                        <IconButton onClick={() => handleDelete(task.id)} icon={<DeleteIcon />} borderRadius="100%" colorScheme="red" />
                    </Flex>)}

                </VStack>
                <br />
                <Input w="80%" type="text" placeholder="add new task!" value={text} onChange={(e) => setText(e.target.value)} onKeyUp={handleEnter} borderRadius="xl" borderColor="blue.100" bg={bgColor[colorMode]} color={textColor[colorMode]} />
                <br />
                <Text as="i" width="100%" paddingLeft="3">*with localStorage</Text>
            </VStack>

        </Container>
    );
}

export default Todo;