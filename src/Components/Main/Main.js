import Card from "../Card/Card";
import PokeInfo from "../PokeInfo/PokeInfo";
import { Button, ContainerMain, InputName, LeftContent } from "./styled";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import NavBar from "../Nav/Header";
import { Input } from "@chakra-ui/react";
import Header from "../Nav/Header";

export default function Main() {
  const [pokeData] = useRequest();
  const [pokeDex, setPokeDex] = useState();
  const [nome, setNome] = useState("");
  console.log(pokeData);

  const recebeNome = (event) => {
    setNome(event.target.value);
  };

  return (
    <>
    <Header/>
      <ContainerMain>
        <InputName>
             <input
              type="text"
              placeholder="Buscar por nome" 
              onChange={recebeNome} value={nome}></input>
             
             </InputName>
        <PokeInfo data={pokeDex} nome={nome} setNome={setNome} />
        <LeftContent>
          {pokeData
            .filter((char) => nome === "" || char.name.includes(nome))
            .map((data, index) => {
              return (
                <Card
                  key={index}
                  data={data}
                  infoPokemon={(poke) => setPokeDex(poke)}
                />
              );
            })}
        </LeftContent>
      </ContainerMain>
    </>
  );
}
