import { ChevronUpIcon } from '@chakra-ui/icons'
import { VStack, Text, Heading, Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
export const Footer = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'blue.800', dark: 'blue.900' }
    const color = { light: 'blue.300', dark: 'gray.300' }
    return (

        <VStack
            as="footer"
            p="2rem"
            align="left"

            bg={bgColor[colorMode]}
            color={color[colorMode]}
        >
            <Heading color="white" size="md">Legal</Heading>
            <br />
            <Text>Impressum</Text>

            <Text>Datenschutzerklärung</Text>
            <br />
            <VStack>
                <Text color="white" mb="1">© 2021 Nefino</Text>
            </VStack>
            {/* <Button bg="blue.800" color="white" w="3" h="8" style={{ position: "fixed", bottom: "30px", right: "20px" }} onClick={() => window.scrollTop(0)}>
                <ChevronUpIcon />
            </Button> */}

        </VStack>
    )
}

