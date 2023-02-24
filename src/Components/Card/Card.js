import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { navigateToDetalhes } from "../../router/coordinator";

export default function Card({pokemon, infoPokemon}) {

  const navigate = useNavigate();
  const irParaDetalhes = () => {
    navigate("/detalhes");
  };

  return (
  
        <>
        {pokemon.map((item)=>{
          return ( <Center py={6}>
            <Box
              maxW={"320px"}
              // bg={useColorModeValue("white", "gray.900")}
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
                  flex={1}
                  bottom={2}
                  bg={"#FAE8E0"}
                  fontSize={"sm"}
                  rounded={"full"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(69,176,140), 0 10px 10px -5px rgb(69,176,140)"
                  }
                  _focus={{
                    bg: "#EF7C8E",
                  }}
                >
                  capturar
                </Button>
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
                  onClick={()=> infoPokemon(item)}  
                  
                >
                  detalhes
                </Button>
         
              </Stack>
            </Box>
          </Center>
   
          )
        })}
        
        
        </>
  );
}
