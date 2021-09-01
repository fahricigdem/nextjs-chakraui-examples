import {
    Stack, HStack, Spacer, Box, Text,
    Image, IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch';
import NextLink from 'next/link';
import {
    Link as ChakraLink
} from '@chakra-ui/react'


const Links = [{ Link: 'Home', Url: '/' }, { Link: 'Aktuelles-', Url: '#' }, { Link: 'Leistungen-', Url: '#' }, { Link: 'About', Url: '/about' }, { Link: 'Todos', Url: '/todo' }];

const NavLink = ({ children }) => (
    <ChakraLink
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
        }}
    >
        {children}
    </ChakraLink>
);

export const Navbar = () => {
    const { colorMode } = useColorMode()
    const bgColor = { light: 'white', dark: 'blue.900' }
    const color = { light: 'blue.600', dark: 'gray.300' }



    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {

        function onScroll() {
            window.pageYOffset > 1 ? setScrolling(true) : setScrolling(false);
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    const logoColor = { light: "https://www.nefino.de/wp-content/uploads/2021/02/Nefino_logo.png", dark: "https://www.nefino.de/wp-content/uploads/2021/02/Nefino_white.svg" }

    let logo = ""
    {
        (scrolling || isOpen) ? logo = logoColor[colorMode]
            : logo = "https://www.nefino.de/wp-content/uploads/2021/02/Nefino_white.svg"
    }

    return (
        <>

            <Box px={4} py={3} width="100%" position="fixed" zIndex="1000"
                color={(scrolling || isOpen) ? color[colorMode] : "white"}
                bg={(scrolling || isOpen) && bgColor[colorMode]}
            >

                <HStack h={10} >
                    <ChakraLink p="2.5" ml="2.5">
                        <Image
                            width="153px"
                            height="40px"
                            //src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_logo.png"
                            //src="https://www.nefino.de/wp-content/uploads/2021/02/Nefino_white.svg"
                            src={logo}
                        />
                    </ChakraLink>

                    <Spacer />

                    <HStack
                        as={'nav'}
                        spacing={[1, 2, 3]}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NextLink href={link.Url}>
                                <ChakraLink
                                    px={2}
                                    py={1}
                                    rounded={'md'}
                                    _hover={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    {link.Link}
                                </ChakraLink>
                            </NextLink>
                        ))}
                        <NavLink>
                            <Image
                                width="2vw"
                                height="14px"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABLElEQVR4AY2QgUZEQRSGz9ydmzbYkBWABBJYABHEFhJ6m0WP0DMEQNIr9AKrN8ne2Tt3Zs7MOdOZmRBEv+v34Tvub9R6fdNlAzU+snSME/wdjbjbbJ6EiEg6BA8102QbjKNpoMzw8v6qD/sOALbbT2MC1NgaAWOKOgxf5czY+4dbAX2G/THzcozLrvPV85IQyqVz0rvg2p9Pei4HjzSsiFbV4JgyhhxCjpGdZ0RhdikLB9/b8Qig7MkpSovR7Cp59q6CazaNFiTt4J82o6uvdMVwTsztKTXZod4jgOJJuqNAjFyGrBR8gM6XwKfIC4KanBSTZ0rClKh08D9DFh3egW7ebH7NcRDQWrz9rM2Ne+mDOXB2mZJ8agL19nwxR2iZXGm1gDbQKhDjd4yHb2oW/KR8xHicAAAAAElFTkSuQmCC"
                            />
                        </NavLink>
                        <NavLink>
                            <Image
                                width="2vw"
                                height="14px"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
                            />
                        </NavLink>

                    </HStack>


                    <IconButton
                        bg="transparent"
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                            textDecoration: 'none',
                        }}
                        _active={{
                            textDecoration: 'none',
                        }}
                        _focus={
                            { outLine: "0" }
                        }
                    />
                    <Text style={{ marginInlineStart: '0' }} display={{ md: 'none' }}>Menü</Text>

                </HStack>

                {isOpen ? (
                    <Box p={4} my={2} display={{ md: 'none' }} bg={bgColor[colorMode]} color={color[colorMode]} position="absolute" left="0" width="100%" style={{ zIndex: "1" }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NextLink href={link.Url}>
                                    <ChakraLink
                                        px={2}
                                        py={1}
                                        rounded={'md'}
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                        onClick={onClose}
                                    >
                                        {link.Link}
                                    </ChakraLink>

                                </NextLink>
                            ))}
                            <NavLink>
                                <Image
                                    width="4vw"
                                    height="14px"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABLElEQVR4AY2QgUZEQRSGz9ydmzbYkBWABBJYABHEFhJ6m0WP0DMEQNIr9AKrN8ne2Tt3Zs7MOdOZmRBEv+v34Tvub9R6fdNlAzU+snSME/wdjbjbbJ6EiEg6BA8102QbjKNpoMzw8v6qD/sOALbbT2MC1NgaAWOKOgxf5czY+4dbAX2G/THzcozLrvPV85IQyqVz0rvg2p9Pei4HjzSsiFbV4JgyhhxCjpGdZ0RhdikLB9/b8Qig7MkpSovR7Cp59q6CazaNFiTt4J82o6uvdMVwTsztKTXZod4jgOJJuqNAjFyGrBR8gM6XwKfIC4KanBSTZ0rClKh08D9DFh3egW7ebH7NcRDQWrz9rM2Ne+mDOXB2mZJ8agL19nwxR2iZXGm1gDbQKhDjd4yHb2oW/KR8xHicAAAAAElFTkSuQmCC"
                                />
                            </NavLink>
                            <NavLink>
                                <Image
                                    width="4vw"
                                    height="14px"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
                                />
                            </NavLink>
                        </Stack>

                    </Box>
                ) : null}
                <DarkModeSwitch />
            </Box>



        </>
    );
}

