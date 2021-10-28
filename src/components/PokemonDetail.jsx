import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CardPoke, Image, PokemonTitleCard } from "./pokemon-item/Card";
import { Badge } from "./pokemon-item/Badge";
import Gatcha from "./Gatcha";
import pokeball from "../images/pokeball.png";

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
          <>
            <div
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                borderTop: "1px dashed black",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  fontSize: "34px",
                  textTransform: "uppercase",
                }}
              >
                Catch Pokemon
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  padding: "15px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  ":hover": {
                    backgroundColor: "rgb(255, 203, 5)",
                  },
                }}
                onClick={() => gatchaPokemon()}
              >
                <img
                  src={pokeball}
                  alt="pokeball"
                  width={75}
                  height={75}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </div>
            </div>
          </>
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
