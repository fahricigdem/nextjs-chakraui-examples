import {
  Link as ChakraLink, Text, Box, Code, List, ListIcon, ListItem, Button
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { useColorMode } from '@chakra-ui/react'


const Index = () => {

  const { colorMode } = useColorMode()
  console.log(colorMode)
  const boxColor = { 'light': "red", "dark": "blue" }

  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <Box w="430px" h="330px" bg={boxColor[colorMode]} mt="300px" >Fahri Cigdem</Box>
    </Container>

  )
}

export default Index