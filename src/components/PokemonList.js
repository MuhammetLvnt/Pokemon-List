import React from "react";
import { useUrl } from "../contexts/UrlContext";
import PokemonListItem from "./PokemonListItem";

function PokemonList() {
  const { pokemonPictureTodos } = useUrl();

  return (
    <div className="grid grid-cols-5 gap-6 mx-5 mt-10">
      {pokemonPictureTodos?.map((pokemonPictureTodo, index) => (
        <PokemonListItem
          key={index}
          pokemonPictureTodo={pokemonPictureTodo}
          index={index}
        />
      ))}
    </div>
  );
}

export default PokemonList;
