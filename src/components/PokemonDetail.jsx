import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardPoke, Image, PokemonTitleCard } from "./pokemon-item/Card";
import { Badge } from "./pokemon-item/Badge";
import Gatcha from "./Gatcha";

export default function PokemonDetail({ pokemon }) {
  const [isGatcha, setIsGatcha] = useState();
  useEffect(() => {
    console.log(pokemon, "<== pokemon");
  }, []);

  const gatchaPokemon = () => {
    setIsGatcha(true);
  };
  return (
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <Row>
        {!isGatcha ? (
          <button onClick={gatchaPokemon}>Gatcha</button>
        ) : (
          <>
            <Gatcha image={pokemon.sprites.front_default} name={pokemon.name} />
          </>
        )}
        <hr />
      </Row>

      <Row>
        <Col md={4}>
          <CardPoke>
            <PokemonTitleCard
              style={{
                fontSize: "3vw",
              }}
            >
              {pokemon.name}
            </PokemonTitleCard>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={{
                width: "100%",
              }}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              {pokemon &&
                pokemon.types.map((type, index) => (
                  <Badge key={index} backgroundColor="blue">
                    {type.type.name}
                  </Badge>
                ))}
            </div>
          </CardPoke>
        </Col>
        <Col md={8}>
          {pokemon &&
            pokemon.moves.map((move, index) => (
              <Badge key={index} backgroundColor="red">
                {move.move.name}
              </Badge>
            ))}
        </Col>
      </Row>
    </div>
  );
}
