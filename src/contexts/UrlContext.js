import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UrlContext = createContext();

export const UrlContextProvider = ({ children }) => {
  const [pokemonTodos, setPokemonTodos] = useState();
  const [pokemonPictureTodos, setPokemonPictureTodos] = useState();
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonPictureUrl = "https://pokeapi.co/api/v2/pokemon-form/";

  const pictureApi = async () => {
    await axios
      .get(pokemonPictureUrl)
      .then((res) => setPokemonPictureTodos(res.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    pictureApi();
  }, []);

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then((res) => setPokemonTodos(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    pokemonUrl,
    pokemonPictureUrl,
    pokemonTodos,
    setPokemonTodos,
    pokemonPictureTodos,
    setPokemonPictureTodos,
  };

  return <UrlContext.Provider value={values}>{children}</UrlContext.Provider>;
};

export const useUrl = () => {
  const context = useContext(UrlContext);

  if (context === undefined) {
    throw new Error("useUrl must be used withing a UrlProvider");
  }
  return context;
};
