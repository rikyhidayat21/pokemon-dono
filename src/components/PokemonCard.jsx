import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default function PokemonCard({ pokemon }) {
  return (
    <>
      <Col md={4} xs={6} lg={3}>
        <div >
          {pokemon.name}
          <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.image} />
          </Link>
        </div>
      </Col>
    </>
  )
}
