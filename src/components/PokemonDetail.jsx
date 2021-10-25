import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function PokemonDetail({ pokemon }) {

  return (
    <div>
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <Row>
        <Col md={6}>
          <ul>
            {pokemon && pokemon.moves.map(move => (
              <li>{move.move.name}</li>
            ))}
          </ul>

        </Col>
        <Col md={6}>
          {pokemon && pokemon.types.map(type => (
            <li>{type.type.name}</li>
          ))}

        </Col>
      </Row>

    </div>
  )
}
