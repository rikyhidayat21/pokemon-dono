import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
import {
  Button,
  CardPoke,
  Image,
  PokemonOwnedCard,
  PokemonTitleCard,
} from "../components/pokemon-item/Card";

export default function PokemonCard({ name, artwork, owned, nickname }) {
  const location = useLocation();
  console.log(location, "<== ");
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
          <CardPoke>
            <PokemonTitleCard>{name}</PokemonTitleCard>
            <Link to={`/pokemon/${name}`}>
              {/* <img src={artwork} width="100%" alt={name} /> */}
              <Image src={artwork} alt={name} />
            </Link>
            <PokemonOwnedCard>
              {nickname ? nickname : `Owned: ${owned + checkOwnedPokemon()}`}
            </PokemonOwnedCard>
            {location.pathname === "/mypokemons" ? (
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Button>Remove</Button>
              </div>
            ) : (
              <>{""}</>
            )}
          </CardPoke>
        </div>
      </Col>
    </>
  );
}
