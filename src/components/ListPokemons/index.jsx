import { useContext } from "react";
import { AuthContext } from "../../contexts/PokemonContext";
import { api } from "../../services/api";
import { useEffect } from "react";
import { Container, Lista } from "./styles";
import { MdAddCircleOutline } from "react-icons/md";
import { VscCircleOutline } from "react-icons/vsc";

export const ListPokemons = () => {
  const { pokemons, setPokemons, AddPokemon } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("?limit=151")
      .then((response) => {
        /* console.log("Lista de pokemons da api: ", response.data.results) */
        setPokemons(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [setPokemons]);

  return (
    <Container>
      <h2>Meus Pokemons</h2>
      <Lista>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <div>
              <VscCircleOutline />
              <span>{pokemon.name}</span>
            </div>
            <MdAddCircleOutline onClick={() => AddPokemon(pokemon)} />
          </li>
        ))}
      </Lista>
    </Container>
  );
};
