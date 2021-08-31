import {
  Link as ChakraLink, Text, Box, Code, List, ListIcon, ListItem, Button, Heading, VStack
} from '@chakra-ui/react'


import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useColorMode } from '@chakra-ui/react'



const Index = () => {

  const { colorMode } = useColorMode()
  console.log(colorMode)
  const boxColor = { 'light': "red", "dark": "blue" }

  return (
    <Container border="2px" borderColor="red">
      <DarkModeSwitch />
      <VStack w="430px" h="330px" bg={boxColor[colorMode]} mt="100px" borderRadius="xl">

        <Heading>About Me</Heading>

      </VStack>
    </Container>

  )
}

export default Index
