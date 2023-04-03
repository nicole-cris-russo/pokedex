import { AuthContext } from "../../contexts/PokemonContext";
import { useContext } from "react";
import { Container, Form } from "./style";

export const SearchPokemon = () => {
  const { pokemons, AddPokemon, pokemonSearch, setPokemonSearch } =
    useContext(AuthContext);

  const handleSearch = (event) => {
    setPokemonSearch(event.target.value);
  };

  const addOfTheSearch = () => {
    if (pokemonSearch) {
      let pokemonFiltered = pokemons.filter((pokemon) =>
        pokemon.name.includes(pokemonSearch)
      );

      console.log("Pokemon filtrado: ", pokemonFiltered);

      pokemonFiltered.forEach((element) => {
        AddPokemon(element);
      });
    } else {
      return;
    }
  };

  console.log("Resultado da pesquisa de pokemon: ", pokemonSearch);

  return (
    <Container>
      <h2>Buscar meu pokemon</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="name">Nome do pokemon</label>
        <input
          type="text"
          id="name"
          placeholder="testesauro"
          value={pokemonSearch}
          onChange={(event) => handleSearch(event)}
        />
        <button onClick={() => addOfTheSearch()}>Adicionar</button>
      </Form>
    </Container>
  );
};
