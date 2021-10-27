import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function MyPokemonListPage() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem("myPokemons")));
  }, []);

  return (
    <div>
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
    </div>
  );
}
