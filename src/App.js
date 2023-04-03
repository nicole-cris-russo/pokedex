import "./App.css";
import { Header } from "./components/Header";
import { ListPokemons } from "./components/ListPokemons";
import { ListPokedex } from "./components/ListPokedex";
import { SearchPokemon } from "./components/SearchPokemon";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <GlobalStyles />
        <SearchPokemon />
        <ListPokedex />
        <ListPokemons />
      </main>
    </div>
  );
}

export default App;
