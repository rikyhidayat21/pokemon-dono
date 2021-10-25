import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import PokemonDetail from '../components/PokemonDetail'
import { GET_POKEMON } from '../graphql/getPokemon'

export default function DetailPage() {
  const { name } = useParams()

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: name }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Shit happened...</p>

  return (
    <div>
      <PokemonDetail pokemon={data.pokemon} />
    </div>
  )
}
