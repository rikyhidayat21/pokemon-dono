import React from "react";
import PokemonCard from "./PokemonCard.jsx";
import { Row } from "react-bootstrap";
import styled from "@emotion/styled";

export default function PokemonList({ pokemons }) {
  return (
    <div>
      <Row
        style={{
          marginTop: "70px",
        }}
      >
        {pokemons &&
          pokemons.map((pokemon, index) => (
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
