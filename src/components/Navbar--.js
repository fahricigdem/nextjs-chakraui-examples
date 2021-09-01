import { Flex, HStack, Spacer } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import {
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Navbar = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'gray.400', dark: 'gray.900' }
    const color = { light: 'black', dark: 'white' }
    return (
        <HStack
            as="nav"
            py="1rem"
            border="2px"
            borderColor="green.200"
            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
            <Link href="/">
                <ChakraLink>
                    Home
                    <ExternalLinkIcon mx="2px" />
                </ChakraLink>
            </Link>

            <Link href="/about">
                <ChakraLink>
                    About
                    <ExternalLinkIcon mx="2px" />
                </ChakraLink>
            </Link>

            <Link href="/todo">
                <ChakraLink>
                    Todos
                    <ExternalLinkIcon mx="2px" />
                </ChakraLink>
            </Link>

            <Spacer />

            <DarkModeSwitch />


        </HStack>
    )
}

