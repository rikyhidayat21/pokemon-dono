import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import happy from "../images/happy.png";
import sad from "../images/sad.png";
import Loader from "./pokemon-item/Loader";
import PokeToast from "./pokemon-item/PokeToast";

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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        alert("Name already exist");
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

        alert("Success add pokemon to pokemon list");

        setAfterSubmit(true);
      }
    }
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      {!statusVisible ? (
        <>
          <div>
            <Loader />
          </div>
        </>
      ) : (
        <>
          {status === "success" ? (
            <>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "20px",
                    fontSize: "28px",
                    textTransform: "uppercase",
                  }}
                >
                  {" "}
                  Congratulations{" "}
                </div>
                {afterSubmit ? (
                  <>
                    <div>
                      <img
                        src={happy}
                        alt="pokeball"
                        width={150}
                        height={150}
                      />
                      <div style={{ fontSize: "20px", marginTop: "10px" }}>
                        {" "}
                        Success Add Pokemon{" "}
                      </div>
                      <div style={{ marginTop: "10px" }}>
                        <ButtonMove />
                      </div>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="name"
                        placeholder="Enter Nickname"
                        style={{
                          boxShadow: "10px 10px 5px #aaaaaa",
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
                        style={{
                          padding: "10px",
                          boxShadow: "10px 10px 5px #aaaaaa",
                          backgroundColor: "white",
                          borderRadius: "5px",
                          cursor: "pointer",
                          width: "100px",
                          marginTop: "20px",
                          marginBottom: "20px",
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
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={sad} alt="pokeball" width={150} height={150} />
                  <div style={{ fontSize: "20px", marginTop: "10px" }}>
                    {" "}
                    Catch failed.{" "}
                  </div>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
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
