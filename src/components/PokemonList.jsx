import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '../graphql/getAllPokemons.jsx'
import PokemonCard from './PokemonCard.jsx'

export default function PokemonList() {

  const gqlVariables = {
    limit: 15,
    offset: 1
  }

  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: gqlVariables
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Shit happened...</p>

  return (
    <div>
      {data && data.pokemons.results.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)}
    </div>
  )
}
