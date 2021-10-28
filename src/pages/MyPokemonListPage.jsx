import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";

export default function MyPokemonListPage() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem("myPokemons")));
  }, []);

  return (
    <div>
      <Container>
        <Row
          style={{
            marginTop: "70px",
          }}
        >
          {pokemons ? (
            pokemons.map((poke, index) => {
              return (
                <PokemonCard
                  key={index}
                  name={poke.name}
                  artwork={poke.image}
                  nickname={poke.nickname}
                />
              );
            })
          ) : (
            <>
              <p>NO POKEMON</p>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
