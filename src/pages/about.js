import {
  Link as ChakraLink, Text, Box, Code, List, ListIcon, ListItem, Button, Heading, VStack
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

import { Container } from '../components/Container'





const About = () => {

  const { colorMode } = useColorMode()
  console.log(colorMode)
  const boxColor = { 'light': "red", "dark": "blue" }

  return (
    <Container >
      <Head>
        <title>About</title>
      </Head>

      <VStack bg={boxColor[colorMode]} mt="100px" borderRadius="xl" p="3">

        <Heading>About Us</Heading>

      </VStack>

    </Container>

  )
}

export default About
