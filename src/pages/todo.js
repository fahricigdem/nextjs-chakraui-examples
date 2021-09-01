import {
  Link as ChakraLink, Text, Box, Code, List, ListIcon, ListItem, Button, Heading, VStack
} from '@chakra-ui/react'

import Head from 'next/head'

import { Container } from '../components/Container'
import Todo from '../components/Todo'




const Index = () => {



  return (
    <Container>
      <Head>
        <title>Todo</title>
      </Head>
      <Todo />
    </Container>

  )
}

export default Index
