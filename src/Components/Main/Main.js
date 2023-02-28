import Card from "../Card/Card";
import PokeInfo from "../PokeInfo/PokeInfo";
import { ContainerMain, InputName, LeftContent } from "./styled";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import Header from "../Nav/Header";

export default function Main() {
  const [pokeData] = useRequest();
  const [pokeDex, setPokeDex] = useState();
  const [nome, setNome] = useState("");

  console.log(pokeData);

  const recebeNome = (event) => {
    setNome(event.target.value);
  };

  const listaPokemon = () => {
    return (
      <>
        <InputName>
          <input
            type="text"
            placeholder="Buscar por nome"
            onChange={recebeNome}
            value={nome}
          ></input>
        </InputName>
        <LeftContent>
          {pokeData
            .filter(
              (char) =>
                nome === "" ||
                char.name.toLowerCase().includes(nome.toLowerCase())
            )
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
      </>
    );
  };

  const detalhes = () => {
    return (
      <>
        <PokeInfo
          data={pokeDex}
          nome={nome}
          setNome={setNome}
          infoPokemon={() => setPokeDex()}
        />
        ;
      </>
    );
  };

  return (
    <>
      <Header />
      <ContainerMain>{pokeDex ? detalhes() : listaPokemon()}</ContainerMain>
    </>
  );
}
