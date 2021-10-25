import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../graphql/getAllPokemons.jsx";
import PokemonCard from "./PokemonCard.jsx";
import { Row } from "react-bootstrap";
import styled from "@emotion/styled";

const Button = styled.div`
  padding: 10px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 25px 6px;
  background-color: greenyellow;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

export default function PokemonList() {
  const gqlVariables = {
    limit: 15,
    offset: 1,
  };

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Shit happened...</p>;

  // load more pokemon

  return (
    <div>
      <Row>
        {data &&
          data.pokemons.results.map((pokemon, index) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              artwork={pokemon.artwork}
              owned={pokemon.owned}
            />
          ))}
      </Row>
      <Button>Load Pokemon</Button>
    </div>
  );
}
