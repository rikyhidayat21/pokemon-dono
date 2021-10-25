import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
  return (
    <>
      <div className="card">
        {pokemon.name}
        <Link to={`/pokemon/${pokemon.name}`}>
          <img src={pokemon.dreamworld} />
        </Link>
      </div>
    </>
  )
}
