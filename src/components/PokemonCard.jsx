import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

const PokemonTitleCard = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

const PokemonOwnedCard = styled.div`
  text-align: center;
  background-color: greenyellow;
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

  const Image = styled.img`
    width: 100%;
    border-radius: 12px;
    height: 250px;
    background-color: whitesmoke;
    margin-bottom: 10px;
  `;

  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <div
          style={{
            backgroundColor: "yellow",
            marginTop: "2vh",
            border: "1px solid #bacdd8",
            padding: "8px",
            borderRadius: "12px",
          }}
        >
          <PokemonTitleCard>{name}</PokemonTitleCard>
          <Link to={`/pokemon/${name}`}>
            {/* <img src={artwork} width="100%" alt={name} /> */}
            <Image src={artwork} alt={name} />
          </Link>
          <PokemonOwnedCard>Owned: </PokemonOwnedCard>
        </div>
      </Col>
    </>
  );
}
