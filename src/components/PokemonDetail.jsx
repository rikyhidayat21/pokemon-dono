import styled from "@emotion/styled";
import React from "react";
import { Row, Col } from "react-bootstrap";

const Badge = styled.div`
  background-color: violet;
  color: white;
  text-decoration: none;
  padding: 3px 6px;
  position: relative;
  display: inline-block;
  border-radius: 12px;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

export default function PokemonDetail({ pokemon }) {
  return (
    <div>
      {pokemon.name}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <Row>
        <Col md={6}>
          {pokemon &&
            pokemon.moves.map((move, index) => (
              <Badge key={index}>{move.move.name}</Badge>
            ))}
        </Col>
        <Col md={6}>
          {pokemon &&
            pokemon.types.map((type, index) => (
              // <li key={index}>{type.type.name}</li>
              <Badge key={index}>{type.type.name}</Badge>
            ))}
        </Col>
      </Row>
    </div>
  );
}
