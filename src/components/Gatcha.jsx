import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Button = styled("div")`
  padding: 10px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 25px 6px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
`;

const ButtonMove = () => {
  return (
    <div
      css={{
        display: "flex",
        // justifyContent: 'space-around',
      }}
    >
      <Link to="/">
        <Button> Go To Pokemon List </Button>
      </Link>
      <Link to="/mypokemons">
        <Button> Go To My Pokemons </Button>
      </Link>
    </div>
  );
};

export default function Gatcha({ image, name }) {
  const { register, getValues } = useForm();
  const [status, setStatus] = useState();
  const [statusVisible, setStatusVisible] = useState(false);
  const [afterSubmit, setAfterSubmit] = useState(false);

  useEffect(() => {
    const n = Math.floor(Math.random() * 2) + 1;
    setStatus(null);
    if (n === 1) {
      setStatus("success");
    } else {
      setStatus("failed");
    }

    setAfterSubmit(false);
    setTimeout(() => {
      setStatusVisible(true);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingList = JSON.parse(localStorage.getItem("myPokemons"));
    const { nickname } = getValues();

    if (!existingList) {
      const myPokemons = [
        {
          nickname,
          name,
          image,
        },
      ];

      localStorage.setItem("myPokemons", JSON.stringify(myPokemons));

      setAfterSubmit(true);
    } else {
      const findPokemon = existingList.find(
        (poke) =>
          poke.name === name &&
          poke.nickname.toLowerCase() === nickname.toLowerCase()
      );
      if (findPokemon) {
        alert("name already exist");
      } else {
        const myPokemons = [
          {
            nickname,
            name,
            image,
          },
        ];

        const updatePokemonsWithExisting = existingList.concat(myPokemons);

        localStorage.setItem(
          "myPokemons",
          JSON.stringify(updatePokemonsWithExisting)
        );

        alert("success add poke to poke list");

        setAfterSubmit(true);
      }
    }
  };
  return (
    <div
      css={{
        [mq[1]]: {
          marginTop: "3rem",
        },
      }}
    >
      {!statusVisible ? (
        <img
          src="../../public/pokeball.png"
          alt="pokeball"
          width={250}
          height={250}
          css={{
            animation: "rotation 10s infinite linear",
          }}
        />
      ) : (
        <>
          {status === "success" ? (
            <>
              <div className="nickname">
                <div css={{ marginBottom: "20px" }}> Congratulations </div>
                {afterSubmit ? (
                  <>
                    <div>
                      <img
                        src="../../public/happy.png"
                        alt="pokeball"
                        width={150}
                        height={150}
                      />
                      <div css={{ fontSize: "20px", marginTop: "10px" }}>
                        {" "}
                        Success Add Pokemon{" "}
                      </div>
                      <div css={{ marginTop: "10px" }}>
                        <ButtonMove />
                      </div>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="name"
                        placeholder="Enter Pokemon Nickname"
                        css={{
                          boxShadow: "rgb(49 53 59 / 12%) 0px 1px 25px 6px",
                          backgroundColor: "white",
                          border: "1px solid white",
                          width: "300px",
                          height: "50px",
                          textAlign: "center",
                          fontSize: "20px",
                          borderRadius: "5px",
                        }}
                        {...register("nickname", { required: true })}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        css={{
                          padding: "10px",
                          boxShadow: "rgb(49 53 59 / 12%) 0px 1px 25px 6px",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          cursor: "pointer",
                          width: "100px",
                          marginTop: "20px",
                          borderColor: "white",
                        }}
                      />
                    </div>
                  </form>
                )}
              </div>
            </>
          ) : (
            status === "failed" && (
              <>
                <div>
                  <img
                    src="../../public/sad.png"
                    alt="pokeball"
                    width={150}
                    height={150}
                  />
                  <div css={{ fontSize: "20px", marginTop: "10px" }}>
                    {" "}
                    Catch failed.{" "}
                  </div>
                  <div css={{ marginTop: "10px" }}>
                    <ButtonMove />
                  </div>
                </div>
              </>
            )
          )}
        </>
      )}
    </div>
  );
}
