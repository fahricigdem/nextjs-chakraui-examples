import { Flex, HStack } from '@chakra-ui/react'
import {
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Navbar = (props) =>
    <HStack
        as="nav"
        py="1rem"
        border="2px"
        borderColor="green.200"
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


    </HStack>
