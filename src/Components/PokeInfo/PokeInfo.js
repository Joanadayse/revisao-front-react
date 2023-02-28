import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function PokeInfo({ data , infoPokemon }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <Center  >
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            boxShadow={"2xl"}
            padding={4}
 
          >
            <Flex flex={1} bg="blue.200">
              <Image
                objectFit="cover"
                boxSize="100%"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              />
            </Flex>
            <Stack
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p={1}
              pt={2}
            >
              <Heading fontSize={"2xl"} fontFamily={'Kanit'}>
                {data.name}
              </Heading>
              {data.abilities.map((poke) => {
                return (
                  <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                    fontFamily={'Kanit'}
                  >
                    <Badge px={2} py={1} fontWeight={"400"} fontFamily={'Kanit'}>
                      {poke.ability.name}
                    </Badge>
                  </Stack>
                );
              })}
              {data.stats.map((poke) => {
                return (
                  <Text textAlign={"center"} px={3} fontFamily={'Kanit'}>
                    {poke.stat.name}:{poke.base_stat}
                  </Text>
                );
              })}
            </Stack>
          </Stack>
        </Center>
      )}

       <button  onClick={() => infoPokemon()}>voltar</button>
     
    </>
  );
}
