import React from "react";
import { Row, Col } from "react-bootstrap";
import { CardPoke, Image, PokemonTitleCard } from "./pokemon-item/Card";
import { Badge } from './pokemon-item/Badge'

export default function PokemonDetail({ pokemon }) {
  return (
    <div>
      <Row>
        <div className="text-center">
          CATCH
        </div>
        <hr />
      </Row>

      <Row>
        <Col md={4}>
          <CardPoke>
            <PokemonTitleCard style={{
              fontSize: "3vw"
            }}>{pokemon.name}</PokemonTitleCard>
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} style={{
              width: "100%"
            }} />
            <div style={{
              textAlign: "center"
            }}>
              {pokemon &&
                pokemon.types.map((type, index) => (
                  <Badge key={index} backgroundColor="blue">{type.type.name}</Badge>
                ))}
            </div>
          </CardPoke>
        </Col>
        <Col md={8}>
          {pokemon &&
            pokemon.moves.map((move, index) => (
              <Badge key={index} backgroundColor="red">{move.move.name}</Badge>
            ))}
        </Col>
      </Row>
    </div>
  );
}
