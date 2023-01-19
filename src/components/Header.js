import React, { useEffect, useState } from "react";
import axios from "axios";

import Pagination from "./Pagination";

function Header() {
  const [pokemons, setPokemons] = useState();
  const [value, setValue] = useState("");

  const AllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1154")
      .then((res) => setPokemons(res.data.results));
  };

  useEffect(() => {
    AllPokemon();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-white mt-5">POKEMON LİST</h1>
      </div>
      <div className="mt-5 text-center">
        <input
          type="text"
          placeholder="Pokemon Ara"
          className="rounded-md h-8 w-64"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <Pagination item={value} pokemons={pokemons} />
    </div>
  );
}

export default Header;
