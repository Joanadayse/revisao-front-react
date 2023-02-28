import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequest() {
  const [pokeData, setPokeData] = useState([]);

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0"
  );

  const [nome, setNome] = useState("");

  const pokeFun = async () => {
    const res = await axios.get(url);
    getPokemon(res.data.results);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  const pokemonFilter = (name) => {
    const filteredPokemons = [];
    if (name === "") {
      pokeFun();
    }
    for (var i in pokeData) {
      if (pokeData[i].data.name.includes(name)) {
        filteredPokemons.push(pokeData[i]);
      }
    }

    setPokeData(filteredPokemons);
  };

  return [pokeData, pokemonFilter, nome, setNome];
}
