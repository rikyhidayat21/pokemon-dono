import { useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/pokemon-item/Loader";
import PokemonDetail from "../components/PokemonDetail";
import { GET_POKEMON } from "../graphql/getPokemon";

export default function DetailPage() {
  const { name } = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: name },
  });

  if (loading) return <Loader />;
  if (error) return <p>Shit happened...</p>;

  return (
    <div>
      <Container>
        <PokemonDetail pokemon={data.pokemon} />
      </Container>
    </div>
  );
}
