import {
    Spacer, Text, Heading, Box,
    Stack,
    VStack, Image as ChakraImage,
    HStack,
    Flex,
    Button, Grid, SimpleGrid

} from '@chakra-ui/react';

import Image from 'next/image'
import Cloud from "../public/cloud-computing.png"
import Analysis from "../public/analysis.png"
import Software from "../public/software.png"
import { useColorMode } from '@chakra-ui/react'

export default function WieArbeitet() {
    const { colorMode } = useColorMode()
    const bgColor = { light: "#F4F7FC", dark: 'blue.700' }
    const color = { light: "blue.900", dark: 'gray.300' }
    const bgCardColor = { light: "white", dark: 'blue.600' }
    return (
        <VStack bg={bgColor[colorMode]} color={color[colorMode]} px={{ base: "4", lg: "8" }} py="8" spacing="7" >
            <Heading>Wie arbeitet Nefino?</Heading>
            <Text align="center" fontSize="xl">Wir sind ein Full-Service-Dienstleister, der einzigartige Daten-, Analysen- und Software-Services für Akteure des Erneuerbare-Energien-Marktes anbietet und natürlich alle, die jetzt Teil davon werden wollen.</Text>
            <br />
            <br />

            <SimpleGrid columns={{ base: "1", lg: "3" }} spacing="70px" pb="12" pt="4"   >
                <Box borderRadius="2xl" boxShadow="lg" bg={bgCardColor[colorMode]} px="8" py="12" textAlign="justify" style={{ position: "relative" }}><Box style={{ position: "absolute", top: "-55px" }}><Image src={Cloud} width="130" height="130" /></Box><Heading my="8">Daten </Heading> Verbessere deine Entscheidungsgrundlage mit unseren standortbezogenen Daten. Ob als einmaliger Direktdownload oder durch Einbindung einer regelmäßig aktualisierten API-Lösung, Nefino bietet dir einen einzigartigen Zugang zu einer Vielzahl GIS-fähiger Datenbanken!</Box>
                <Box borderRadius="2xl" boxShadow="lg" bg={bgCardColor[colorMode]} px="8" py="12" textAlign="justify" style={{ position: "relative" }}><Box style={{ position: "absolute", top: "-55px" }}><Image src={Analysis} width="130" height="130" /></Box><Heading my="8">Analysen</Heading> Nutze unsere Expertise, um für deine Herausforderungen die richtige Lösung zu finden. Von der Identifikation neuer Flächenpotenziale bis hin zur Prognose der voraussichtlichen Rückbaukosten, Nefino bietet dir eine Reihe einmaliger Analyseservices entlang des gesamten Lebenszyklusses von Wind- und Solarenergieanlagen!</Box>
                <Box borderRadius="2xl" boxShadow="lg" bg={bgCardColor[colorMode]} px="8" py="12" textAlign="justify" style={{ position: "relative" }}><Box style={{ position: "absolute", top: "-55px" }}><Image src={Software} width="130" height="130" /></Box><Heading my="8">Software</Heading> Bring dein Unternehmen gemeinsam mit uns auf das nächste digitale Level. Mit unseren maßgeschneiderten Schnittstellen und Softwarelösungen verfügst du stets über die richtigen Informationen, zur richtigen Zeit am richtigen Ort.</Box>

            </SimpleGrid>




        </VStack >
    )

};
