import styled from "@emotion/styled";

export const PokemonTitleCard = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

export const PokemonOwnedCard = styled.div`
  text-align: center;
  background-color: white;
`;

export const CardPoke = styled.div`
  background-color: yellow;
  margin-top: 2vh;
  margin-bottom: 2vh;
  border: 1px solid #bacdd8;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.1);
  }
`

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  background-color: whitesmoke;
  margin-bottom: 10px;
`;