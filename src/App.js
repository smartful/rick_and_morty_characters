import './App.css';
import { CharactersProvider } from './CharactersContext';
import CharactersList from './components/CharactersList';
import Filters from './components/Filters';

function App() {
  return (
    <CharactersProvider>
      <div className="App">
        <h1>Rick and Morty characters</h1>
        <h2>Dead Morty</h2>
        <Filters />
        <CharactersList />
      </div>
    </CharactersProvider>
  );
}

export default App;
