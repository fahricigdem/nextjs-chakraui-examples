import {
  Link as ChakraLink, Text, Code, List, ListIcon, ListItem, Button
} from '@chakra-ui/react'



import { Container } from '../components/Container'

import { useColorMode } from '@chakra-ui/react'

import Head from 'next/head'

import {
  Heading,
  Box,
  VStack,
  chakra,
  Spacer
} from "@chakra-ui/react";

import NefinoHomeBewerbung from "../components/NefinoHomeBewerbung"
import WieArbeitet from "../components/WieArbeitet"

const Index = () => {
  const { colorMode } = useColorMode()
  console.log(colorMode)

  const textColor = { light: "white", dark: "gray.300" }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <chakra.div
        color={textColor[colorMode]}
        backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/background.svg)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="100vh"
      >

        <VStack
          ml="6"
          mt={{ base: "23vh", md: "31vh" }}
          align="flex-start"
          position="absolute"
          zIndex="10"
          spacing={{ base: "2", sm: "2", md: "3" }}
        >

          <Heading fontSize={["5vw", "4vw", "4vw"]} pt={["25vw", "0", , "0"]}>
            Nutzen des vollen Potenzials
          </Heading>

          <Heading
            pl={["6vw", "8vw"]}
            fontSize={["5vw"]}

          >
            erneubarer Ressourcen
          </Heading>

          <Heading fontSize={["4vw"]} pl={["4vw", "4.8vw"]}>
            mit {" "}
            <chakra.span
              fontSize={["5vw"]}
              fontWeight="bold"
              style={{ fontFamily: "Arial", fontWeight: "900" }}
            >
              Location Intelligence
            </chakra.span>
          </Heading>



          <VStack align="flex-start" spacing={{ base: "1", sm: "0", md: "-2" }} >
            <chakra.h1
              fontSize={["4vw"]}
              style={{ color: "#64B63F" }}
              mt={{ base: "3vh", sm: "0px", md: "0px" }}
            >
              <chakra.p as="strong">Nefino</chakra.p> bietet leistungsstarke{" "}
              <chakra.p as="strong">GIS Lösungen</chakra.p>
            </chakra.h1>

            <chakra.h1
              fontSize={["3.8vw"]}
              style={{ color: "#64B63F" }}
            >
              für die grünen Vorreiter von Morgen
            </chakra.h1>
          </VStack>


        </VStack>


        <Box

          position="absolute"
          top="14.5vh"
          right="0.95"
          width="40vw"
          height="40vw"
          backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/earth.svg)"
          backgroundPosition="right"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"

        ></Box>
        <Box

          position="absolute"
          top="50vh"
          left="0"
          w="100%"
          height="calc(45vh)"
          backgroundImage="url(https://www.nefino.de/wp-content/uploads/2021/03/wt_and_pv.svg)"
          backgroundSize="Contain"
          backgroundRepeat="no-repeat"

        ></Box>
      </chakra.div>
      <NefinoHomeBewerbung />
      <WieArbeitet />
    </>
  );
}
export default Index