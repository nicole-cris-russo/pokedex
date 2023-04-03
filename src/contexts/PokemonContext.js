import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [id, setId] = useState(0);

  console.log("Array da Pokedex: ", pokedex);

  const AddPokemon = (pokemon) => {
    setId(id + 1);
    const newPokemon = {
      id: id,
      name: pokemon.name,
      url: pokemon.url,
    };
    setPokedex((oldPokemons) => [...oldPokemons, newPokemon]);
  };

  const DeletePokemon = (idPokemon) => {
    const filteredPokemon = pokedex.filter(
      (pokemon) => pokemon.id !== idPokemon
    );

    setPokedex(filteredPokemon);
  };

  return (
    <AuthContext.Provider
      value={{
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        pokemonSearch,
        setPokemonSearch,
        AddPokemon,
        DeletePokemon,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
