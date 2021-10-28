import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../graphql/getAllPokemons";
import Loader from "../components/pokemon-item/Loader";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  const gqlVariables = {
    limit: 15,
    offset: 1,
  };

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    let getPokemons;

    if (JSON.parse(localStorage.getItem("pokemonList"))) {
      getPokemons = JSON.parse(localStorage.getItem("pokemonList"));
    } else {
      getPokemons = data.pokemons.results || [];
    }

    const updatePokemon = getPokemons.map((poke) => {
      return {
        ...poke,
        owned: poke.owned ? poke.owned : 0,
      };
    });

    setPokemons(updatePokemon);
    localStorage.setItem("pokemonList", JSON.stringify(updatePokemon));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Shit happened...</p>;

  return (
    <div>
      <Container>
        <PokemonList pokemons={pokemons} />
      </Container>
    </div>
  );
}
