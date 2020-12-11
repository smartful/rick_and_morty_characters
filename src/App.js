import './App.css';
import { MortyProvider } from './MortyContext';
import MortyList from './components/MortyList';

function App() {
  console.log('App');
  return (
    <MortyProvider>
      <div className="App">
        <h1>Rick and Morty characters</h1>
        <h2>Dead Morty</h2>
        <MortyList />
      </div>
    </MortyProvider>
  );
}

export default App;
