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
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate= useNavigate()
 const irParaDetalhes=()=>{
  navigate("/detalhes")
 }


  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        textAlign={"center"}
        w={[150, 100, 300]}
      >
        <Avatar
          size={"xl"}
          src={
            "https://tse2.mm.bing.net/th?id=OIP.FR5bIBFJp9adYcGJw-QAUQAAAA&pid=Api&P=0"
          }
          alt={"Avatar Alt"}
          mb={4}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} color={"#EF7C8E"} h={20}>
          bulbasaur
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
            onClick={irParaDetalhes}
          >
            detalhes
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
