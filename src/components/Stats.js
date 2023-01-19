import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

function Stats() {
  const location = useLocation();
  const [stats, setStats] = useState([]);

  const searchPokemon = location.state.pokemon;
  const searchIndex = searchPokemon?.url
    .split("https://pokeapi.co/api/v2/pokemon/")[1]
    .split("/")[0];

  const clickPokemon = location.state.pokemonPictureTodo;
  const clickIndex = clickPokemon?.url
    .split("https://pokeapi.co/api/v2/pokemon/")[1]
    .split("/")[0];

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${
          searchIndex ? searchIndex : clickIndex
        }/`
      )
      .then((res) => setStats(res.data.stats));
  }, []);

  return (
    <div className="text-center">
      <h1 className="mt-4">STATS</h1>
      <div className="container border flex">
        <div>
          <div>
            <img
              alt="images"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                searchIndex ? searchIndex : clickIndex
              }.png`}
            />
          </div>
          <div>
            <label className="text-black">
              {searchPokemon
                ? searchPokemon.name.charAt(0).toUpperCase() +
                  searchPokemon.name.slice(1)
                : clickPokemon.name.charAt(0).toUpperCase() +
                  clickPokemon.name.slice(1)}
            </label>
          </div>
        </div>
        <div className="grid grid-rows-6  gap-4">
          <label>HP</label>
          <label>ATTACK</label>
          <label>DEFENSE</label>
          <label>SPECİAL-ATTACK</label>
          <label>SPECİAL-DEFENSE</label>
          <label>SPEED</label>
        </div>
        <div className="grid grid-rows-6 gap-4 ml-3">
          {stats?.map((stat, index) => (
            <ProgressBar
              key={index}
              completed={stat.base_stat}
              maxCompleted={200}
              className="w-96"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
