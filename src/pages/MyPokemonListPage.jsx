import React, { useEffect, useState } from "react";

export default function MyPokemonListPage() {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    setPokemons(JSON.parse(localStorage.getItem("myPokemons")));
  }, []);

  return (
    <div>
      {pokemons ? (
        pokemons.map((poke, index) => <>{poke.name}</>)
      ) : (
        <>
          <p>NO POKEMON</p>
        </>
      )}
    </div>
  );
}
