import Card from "../Card/Card";
import PokeInfo from "../PokeInfo/PokeInfo";
import { Button, ContainerMain, LeftContent, RightContent } from "./styled";
import axios from "axios";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";

export default function Main() {
  const [pokeData, setPokeDex, pokeDex] = useRequest();

  return (
    <>
      <ContainerMain>
        <LeftContent>
          <Card pokemon={pokeData} infoPokemon={(poke) => setPokeDex(poke)} />

          <div className="buton">
            <Button>Next</Button>
          </div>
        </LeftContent>

        <PokeInfo data={pokeDex} />
      </ContainerMain>
    </>
  );
}
