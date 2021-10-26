import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "@emotion/styled";

const PokemonTitleCard = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

const PokemonOwnedCard = styled.div`
  text-align: center;
  background-color: white;
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
    background-color: whitesmoke;
    margin-bottom: 10px;
  `;

  const CardPoke = styled.div`
    background-color: yellow;
    margin-top: 2vh;
    margin-bottom: 2vh;
    border: 1px solid #bacdd8;
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      transform: scale(1.1);
    }
  `

  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <div>
          <CardPoke>
            <PokemonTitleCard>{name}</PokemonTitleCard>
            <Link to={`/pokemon/${name}`}>
              {/* <img src={artwork} width="100%" alt={name} /> */}
              <Image src={artwork} alt={name} />
            </Link>
            <PokemonOwnedCard>Owned: </PokemonOwnedCard>
          </CardPoke>
        </div>
      </Col>
    </>
  );
}
