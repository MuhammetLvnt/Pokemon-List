import React from "react";

function Search({ pokemon }) {
  const urlIndex = pokemon?.url
    .split("https://pokeapi.co/api/v2/pokemon/")[1]
    .split("/")[0];

  return (
    <div className="max-w-sm p-6 flex justify-center bg-gray-800 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800">
      <div>
        <img
          alt="images"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urlIndex}.png`}
        />
        <div>
          <label className="text-white">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </label>
        </div>
        <label className="text-white">#{urlIndex}</label>
      </div>
    </div>
  );
}

export default Search;
