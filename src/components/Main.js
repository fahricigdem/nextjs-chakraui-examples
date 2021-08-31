import { Stack } from '@chakra-ui/react'

export const Main = (props) => (
  <Stack
    border="2px" borderColor="blue.200"
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"

    pt="8rem"
    px="1rem"
    {...props}
  />
)
