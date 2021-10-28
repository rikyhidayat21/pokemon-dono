import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../graphql/getAllPokemons";
import Loader from "../components/pokemon-item/Loader";

export default function HomePage() {
  const gqlVariables = {
    limit: 15,
    offset: 1,
  };

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <Loader />;
  if (error) return <p>Shit happened...</p>;

  return (
    <div>
      <Container>
        <PokemonList pokemons={data.pokemons.results} />
      </Container>
    </div>
  );
}
