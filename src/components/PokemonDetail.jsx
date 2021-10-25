import React from 'react'

export default function PokemonDetail({ pokemon }) {

  return (
    <div>
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}
