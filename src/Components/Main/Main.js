import Card from "../Card/Card";
import PokeInfo from "../PokeInfo/PokeInfo";
import { Button, ContainerMain, LeftContent } from "./styled";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";

export default function Main() {
  const [pokeData] = useRequest();
  const [pokeDex, setPokeDex] = useState();

  return (
    <>
      <ContainerMain>
      <PokeInfo data={pokeDex} />
        <LeftContent>
          <Card pokemon={pokeData} infoPokemon={(poke) => setPokeDex(poke)} />

          <div className="buton">
            <Button>Next</Button>
          </div>
        </LeftContent>

     
      </ContainerMain>
    </>
  );
}
