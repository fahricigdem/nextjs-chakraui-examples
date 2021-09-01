import {
    Spacer, Text, Heading, Box,
    Stack,
    VStack,
    HStack,
    Flex,
    Button, Grid, SimpleGrid

} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react'
export default function NefinoHomeBewerbung() {
    const { colorMode } = useColorMode()
    const bgColor = { light: "#EB5B4A", dark: 'red.800' }
    const color = { light: "white", dark: 'gray.300' }

    return (
        <VStack align="flex-start" bg={bgColor[colorMode]} color={color[colorMode]} p="8" spacing="7">
            <Heading>Job mit Sinn gesucht?</Heading>
            <Text>Wir suchen Verstärkung! Werde jetzt Teil unseres Teams und setze unsere Vision in die Realität um. Bei uns findest du ein spannendes Arbeitsumfeld im Bereich der erneuerbaren Energien, qualifizierte DataAnalytics- und Softwareentwicklungsaufgaben rund um die Wind- und Solarenergie, flexibles Arbeiten und ein besonders aufgeschlossenes Team.</Text>

            <SimpleGrid columns={{ base: "1", md: "2" }} spacing={{ base: "0vw", md: "10vw" }}>
                <Text as="strong" height="80px" width={{ base: "80vw", md: "45vw" }}>Wir freuen uns auf dich!</Text>
                <Box height="80px" align="center"><Button bg="blue.700" rounded="false">Jetzt Bewerben</Button></Box>
            </SimpleGrid>

        </VStack>
    )

};
