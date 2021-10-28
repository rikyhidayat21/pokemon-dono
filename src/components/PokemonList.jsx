import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard.jsx";
import { Row } from "react-bootstrap";

export default function PokemonList({ pokemons }) {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    let getPokemons;

    if (JSON.parse(localStorage.getItem("pokemonList"))) {
      getPokemons = JSON.parse(localStorage.getItem("pokemonList"));
    } else {
      getPokemons = pokemons || [];
    }

    const updatePokemon = getPokemons.map((poke) => {
      return {
        ...poke,
        owned: poke.owned ? poke.owned : 0,
      };
    });

    setPoke(updatePokemon);
    localStorage.setItem("pokemonList", JSON.stringify(updatePokemon));
  }, []);

  return (
    <div>
      <Row
        style={{
          marginTop: "70px",
        }}
      >
        {poke &&
          poke.map((pokemon, index) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              artwork={pokemon.artwork}
              owned={pokemon.owned}
            />
          ))}
      </Row>
    </div>
  );
}
