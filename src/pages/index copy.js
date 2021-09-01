import {
  Link as ChakraLink, Text, Box, Code, List, ListIcon, ListItem, Button, Heading, VStack
} from '@chakra-ui/react'


import { Container } from '../components/Container'

import { useColorMode } from '@chakra-ui/react'

import Head from 'next/head'

const Index = () => {

  const { colorMode } = useColorMode()
  console.log(colorMode)
  const boxColor = { light: "red", dark: "blue" }
  const textColor = { light: "yellow.400", dark: "white" }

  return (
    <Container border="2px" >
      <Head>
        <title>Home Page</title>
      </Head>

      <VStack w="430px" h="330px" bg={boxColor[colorMode]} mt="100px" borderRadius="xl">
        <Heading color={textColor[colorMode]}>Home</Heading>

      </VStack>
    </Container>

  )
}

export default Index
