import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const PokemonNameCard = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

export default function PokemonCard({ name, artwork, owned }) {
  const checkOwnedPokemon = () => {
    const myPokemons = JSON.parse(localStorage.getItem("myPokemons"));
    if (myPokemons) {
      const filterPokemons = myPokemons.filter((poke) => poke.name === name);
      if (filterPokemons.length) return filterPokemons.length;
      return 0;
    } else {
      return 0;
    }
  };

  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <div>
          <PokemonNameCard>{name}</PokemonNameCard>
          <Link to={`/pokemon/${name}`}>
            <img src={artwork} width="100%" alt={name} />
          </Link>
          <p>Owned: </p>
        </div>
      </Col>
    </>
  );
}
