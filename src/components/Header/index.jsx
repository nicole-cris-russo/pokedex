import { MdCatchingPokemon } from "react-icons/md";
import { HeaderTag } from "./style";

export const Header = () => {
  return (
    <HeaderTag>
      <h1>
        Minha <span>Pokedex</span>
      </h1>
      <MdCatchingPokemon />
    </HeaderTag>
  );
};
