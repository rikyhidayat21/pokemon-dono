import React from 'react'
import PokemonList from '../components/PokemonList'
import { Container } from 'react-bootstrap'

export default function HomePage() {
  return (
    <div>
      <Container>
        <PokemonList />
      </Container>
    </div>
  )
}
