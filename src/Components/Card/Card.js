import { Heading, Avatar, Box, Center, Stack, Button } from "@chakra-ui/react";

export default function Card({ pokemon, infoPokemon }) {
  return (
    <>
      {pokemon.map((item) => {
        return (
          <Center py={6}>
            <Box
              maxW={"320px"}
              boxShadow={"2xl"}
              rounded={"lg"}
              textAlign={"center"}
              w={[150, 100, 300]}
            >
              <Avatar
                size={"xl"}
                src={item.sprites.front_default}
                alt={"Avatar Alt"}
                mb={4}
              />
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                color={"#EF7C8E"}
                h={20}
              >
                {item.name}
              </Heading>

              <Stack direction={"row"} spacing={6} m={2}>
                <Button
                  bottom={3}
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"#D8A7B1"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(69,176,140), 0 10px 10px -5px rgb(69,176,140)"
                  }
                  _hover={{
                    bg: "#EF7C8E",
                  }}
                  _focus={{
                    bg: "#EF7C8E",
                  }}
                  onClick={() => infoPokemon(item)}
                >
                  detalhes
                </Button>
                
              </Stack>
            </Box>
          </Center>
        );
      })}
    </>
  );
}
