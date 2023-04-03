import { useContext } from "react";
import { Container, Lista } from "./style";
import { AuthContext } from "../../contexts/PokemonContext";
import { TbTrashX } from "react-icons/tb";
import { VscCircleOutline } from "react-icons/vsc";

export const ListPokedex = () => {
  const { pokedex, DeletePokemon } = useContext(AuthContext);

  return (
    <Container>
      <h2>Meu Time de Pokemons</h2>
      <Lista>
        {pokedex.map((pokemon, index) => (
          <li key={index}>
            <div>
              <VscCircleOutline />
              <span>{pokemon.name}</span>
            </div>
            <TbTrashX onClick={() => DeletePokemon(pokemon.id)} />
          </li>
        ))}
      </Lista>
    </Container>
  );
};
