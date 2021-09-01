import { useState, useEffect } from 'react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import { VStack, Text, Heading, Button, Link } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
export const Footer = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'blue.800', dark: 'blue.900' }
    const color = { light: 'blue.300', dark: 'gray.300' }

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


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
                
            </Button>*/}
            <Link display={(scrollY > 400) ? "visible" : "none"} href="#" bg="blue.800" color="white" p="3" w="10" style={{ textDecoration: "none", position: "fixed", bottom: "30px", right: "30px" }}><ChevronUpIcon /></Link>

        </VStack>
    )
}

